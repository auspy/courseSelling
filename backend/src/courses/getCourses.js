import { Course } from "../../mongoose/modals/modals.js";

//  todo: Add a if the client is user. this just sends data to anybody that requests. we need some kind of authentication here which sends data only to our users. so they must have a account to access this data. maybe we can add a middleware that only allows requests based on type of users. this will help in admin requests as well.
export default async function getCourses(req, res) {
  try {
    const docs = await Course.find({});
    console.log("getCourses", docs);
    res.status(200).json({ msg: "getCourses", data: docs });
  } catch (error) {
    console.log(`Error in getCourses: ${error.message}`);
    res.status(400).json({ msg: error.message, status: "failed" });
  }
}
