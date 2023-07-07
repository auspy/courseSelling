import { Router } from "express";
import getCourses from "../src/courses/getCourses.js";
import getACourse from "../src/courses/getACourse.js";
import purchased from "../src/courses/purchased.js";

const courseRoutes = Router();
courseRoutes.post("/", getCourses);
courseRoutes.post("/purchased", purchased);
courseRoutes.post("/:id", getACourse);

export default courseRoutes;
