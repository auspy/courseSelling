import { Admin, Course } from "../../mongoose/modals/modals.js";

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
    // add creator id if present
    if (!(creator || req.user._id)) {
      return res
        .status(400)
        .json({ msg: "missing creator id", status: "failed" });
    }
    newCourseData.creator = creator || req.user._id;
    const course = new Course(newCourseData);

    // add course to user's created Courses
    if (newCourseData.creator) {
      console.log(newCourseData.creator, course);
      const updateCreatedCourses = await Admin.updateOne(
        { _id: newCourseData.creator },
        { $push: { createdCourses: course._id } }
      );
      // updateOne is faster than findByIdAndUpdate because it doesn't have to scan entire collection, it will stop once it finds the first match
      if (
        updateCreatedCourses.acknowledged === false ||
        updateCreatedCourses.modifiedCount === 0 ||
        updateCreatedCourses.matchedCount === 0
      )
        // not updated
        return res.status(400).json({
          msg: "update admin created courses failed",
          status: "failed",
          data: updateCreatedCourses,
        });
    }

    // save course
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
