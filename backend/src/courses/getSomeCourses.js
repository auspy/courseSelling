import { User } from "../../mongoose/modals/modals.js";

export default async function purchased(req, res) {
  try {
    const courses = await User.findById(req.user.id)
      .populate("purchasedCourses")
      .exec();
    if (!courses?.length > 0) {
      return res
        .status(404)
        .json({ msg: "No courses found", status: "failed" });
    }
    res
      .status(200)
      .json({ courses: courses.purchasedCourses, status: "success" });
  } catch (error) {
    console.log(`Error in purchased courses: ${error.message}`);
    res.status(500).json({ error: error.message, status: "failed" });
  }
}
