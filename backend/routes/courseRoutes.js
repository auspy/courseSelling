import { Router } from "express";
import getCourses from "../src/courses/getCourses.js";
import getACourse from "../src/courses/getACourse.js";

const courseRoutes = Router();
courseRoutes.get("/courses", getCourses); // get all courses
courseRoutes.get("/courses/:id", getACourse); // get a course

export default courseRoutes;
