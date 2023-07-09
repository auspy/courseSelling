import { Router } from "express";
import login from "../src/auth/login.js";
import register from "../src/auth/register.js";
const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/register", register);

export default authRoutes;
