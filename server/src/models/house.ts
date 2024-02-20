import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
  headline: String,
  price: Number,
  description: String,
  imageUrl: String,
  address: String,
});

const House = mongoose.model("Todo", houseSchema);

export default House;
