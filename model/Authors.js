import mongoose from "mongoose";
//import authors from "../api/authors";

const authorSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
})

const Author = mongoose.model('authors', authorSchema);

export default Author