import { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

export default userSchema;
