const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../Models/listing.js");
const {isLoggedIn, validateListing,isOwner} = require("../middleware.js");

const listingController = require("../controller/listings.js")
//form upload data 
const multer  = require('multer')
const {storage} = require("../cloudconfig.js")
const upload = multer({storage});

router.route("/")
//index route
.get( wrapAsync(listingController.index)) 
//create
.post(isLoggedIn, 
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing));



//new listing
router.get("/new",isLoggedIn,listingController.renderNewForm)


router.route("/:id")
//show route
.get( wrapAsync(listingController.showListing))
//update
.put(isLoggedIn,isOwner,upload.single("listing[image]"),
validateListing, wrapAsync(listingController.updateListing))
//delete 
.delete(isLoggedIn, isOwner,wrapAsync(listingController.destroyListing));



//Edit 
router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));


module.exports = router;