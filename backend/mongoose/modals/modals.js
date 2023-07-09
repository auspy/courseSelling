import { model } from "mongoose";
import userSchema from "../schemas/userSchema.js";
import courseSchema from "../schemas/courseSchema.js";
import adminSchema from "../schemas/adminSchema.js";

const User = model("User", userSchema);
const Course = model("Course", courseSchema);
const Admin = model("Admin", adminSchema);

export { User, Course, Admin };
