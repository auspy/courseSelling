import { Router } from "express";
import AddCourse from "../src/courseSeller/addCourse.js";
import updateCourse from "../src/courseSeller/updateCourse.js";
import purchased from "../src/courses/getSomeCourses.js";

const sellerRoutes = Router();

sellerRoutes.post("/addCourse", AddCourse); // create a new course
sellerRoutes.patch("/updateCourse/:id", updateCourse); // update a course
sellerRoutes.get("/courses", purchased);

export default sellerRoutes;
