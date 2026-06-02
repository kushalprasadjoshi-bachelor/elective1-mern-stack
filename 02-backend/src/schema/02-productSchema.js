import { Schema, model } from "mongoose";

let productSchema = Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
  description: {
    type: String,
  },
});

let Product = model("Product", productSchema);

export default Product;
