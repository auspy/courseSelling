import { model } from "mongoose";

const User = model("User", userSchema);
const Course = model("Course", courseSchema);
const Admin = model("Admin", adminSchema);

export { User, Course, Admin };
