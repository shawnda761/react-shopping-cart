const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    availableSizes: { type: [String], required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
