import { Schema } from "mongoose";

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
  createdAt: Date,
  creator: Schema.Types.ObjectId,
});

export default courseSchema;
