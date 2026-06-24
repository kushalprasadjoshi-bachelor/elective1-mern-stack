import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required."],
  },
  author: {
    type: String,
    default: "",
  },
  isbn: {
    type: Number,
    required: [true, "Book isbn is required."],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Book price is required."],
  },
  publisher: {
    type: String,
    required: [true, "Book publisher is required."],
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
