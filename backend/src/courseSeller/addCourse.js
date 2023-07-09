import { Course } from "../../mongoose/modals/modals.js";

export default async function AddCourse(req, res) {
  try {
    const { title, description, price, imageLink, published, creator } =
      req.body;
    if (!(title && description && price)) {
      return res
        .status(400)
        .json({ msg: "Please enter all fields", status: "failed" });
    }
    // add course to database
    const newCourseData = {
      title,
      description,
      price,
      imageLink,
      published: published || false,
      createdAt: new Date().getTime(),
    };
    if (creator || req.user.id) {
      newCourseData.creator = creator || req.user.id;
    }
    const course = new Course(newCourseData);
    const data = await course.save();
    res.status(200).json({
      msg: "Course added successfully",
      data: data,
      status: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: error?.message || "internal server error",
      status: "failed",
    });
  }
}
