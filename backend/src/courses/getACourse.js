import { Course } from "../../mongoose/modals/modals.js";

export default async function getACourse(req, res) {
  try {
    const id = req.params.id;
    if (!id)
      return res.status(400).json({ msg: "id is required", status: "failed" });
    const doc = await Course.findById(id);
    console.log("getACourse", doc);
    if (!doc)
      return res
        .status(400)
        .json({ msg: "Course not found", status: "failed" });
    res.status(200).json({ msg: "getACourse", data: doc });
  } catch (error) {
    console.log(`Error in getACourse: ${error.message}`);
    res.status(400).json({ msg: error.message, status: "failed" });
  }
}
