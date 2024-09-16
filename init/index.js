const mongoose = require("mongoose");
const Listing = require("../Models/listing.js")
const {data}= require("./data.js")


const MONGO_URL = "mongodb://127.0.0.1:27017/FlexiStay";

main()
    .then((res) => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });


async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
  await  Listing.deleteMany({});
  newdata = data.map((obj) => ({...obj,owner:"66df3d28459650c7ea7362de"}))
  await Listing.insertMany(newdata);
  console.log("data was initialize")
}
initDB();
