import { Course } from "../../mongoose/modals/modals.js";

export default async function updateCourse(req, res) {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ msg: "id is required" });

    const updateData = await Course.updateOne(
      { _id: id, creator: req.user.id }, // using creator to make sure that only the creator can update the course
      req.body
    );

    if (
      updateData.acknowledged === false ||
      updateData.modifiedCount === 0 ||
      updateData.matchedCount === 0
    )
      return res
        .status(400)
        .json({ msg: "update failed", status: "failed", data: updateData });
    console.log("updateCourse", req.body, updateData);
    res
      .status(200)
      .json({ msg: "updatedCourse", data: updateData, status: "success" });
  } catch (error) {
    console.log(`Error in updateCourse: ${error.message}`);
    res.status(400).json({ msg: error.message, status: "failed" });
  }
}
