import { Router } from "express";
import authRoutes from "./authRoutes.js";
import courseRoutes from "./courseRoutes.js";
import { decryptAccessTokenMW } from "../src/helper/jwtToken.js";
import verifyUser from "../src/middleware/verifyUser.js";
import purchased from "../src/courses/getSomeCourses.js";

const userRoutes = Router();

// open routes
userRoutes.use("/", [authRoutes, courseRoutes]); // u or user

// user needs to be logged in to access these routes
userRoutes.get(
  "/purchasedCourses",
  decryptAccessTokenMW,
  verifyUser,
  purchased
); // using get because according to RESTful API, we should use get to retrieve data

export default userRoutes;
