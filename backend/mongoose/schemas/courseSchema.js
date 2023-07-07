import { Schema } from "mongoose";

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

export default courseSchema;
