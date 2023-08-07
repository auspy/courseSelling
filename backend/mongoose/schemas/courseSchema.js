import { Schema } from "mongoose";

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageLink: { type: String },
  published: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  creator: { type: Schema.Types.ObjectId, ref: "Admin" }, // Reference to the "Admin" model
  benefits: [{ type: String }], // Array of strings for benefits
  rating: { type: Number }, // Floating-point number for rating
  purchaseCount: { type: Number }, // Integer for purchase count
  category: { type: String }, // String for category
});

export default courseSchema;
