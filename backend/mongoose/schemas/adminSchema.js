import { Schema } from "mongoose";

const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

export default adminSchema;
