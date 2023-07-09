import { Schema } from "mongoose";

const adminSchema = new Schema({
  username: String,
  password: String,
  createdCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

export default adminSchema;
