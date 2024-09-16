const Listing = require("../Models/listing.js")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const maptoken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding ({ accessToken: maptoken });

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
}


module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested does not exits!")
        res.redirect("/listings");
        return;
    }
    // console.log(listing);
    res.render("./listings/show.ejs", { listing })
}


module.exports.createListing = async (req, res) => {
     let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
        .send()
  
    
    let url = req.file.path;
    let filename = req.file.filename;
    const newlisting = new Listing(req.body.listing);
    newlisting.image = { url, filename };
    // console.log(req.user);
    newlisting.owner = req.user._id;
    newlisting.geometry = response.body.features[0].geometry;
    req.flash("success", "New listing Created")
       await newlisting.save();
   
    res.redirect("/listings");
}


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exits!")
        res.redirect("/listings");
        return;
    }
    let originalImageurl = listing.image.url;
    // console.log(originalImageurl)
    // originalImageurl.replace("/upload","/upload/h_100,w_250")
    res.render("./listings/Edit.ejs", { listing,originalImageurl })
}



module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    // console.log(listing)
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        // console.log(url.filename);
        listing.image = { url, filename };
        await listing.save();
    }
   
    req.flash("success", "listing updated")

    res.redirect(`/listings/${id}`);
}



module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success", "listing deleted")
    res.redirect("/listings");

}