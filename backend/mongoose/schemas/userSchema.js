import { Schema } from "mongoose";

const userSchema = new Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  email: String,
  firstName: String,
  lastName: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  country: String,
});

export default userSchema;
