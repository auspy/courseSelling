import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import verifySeller from "./src/middleware/verifySeller.js";
import { decryptAccessToken } from "./src/helper/jwtToken.js";
import setType from "./src/helper/setType.js";

// SETUP
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
app.use(bodyParser.json());

// MONGOOSE
const { connect, connection: conn } = mongoose;
const mongoUrl = process.env.MONGO_URI;
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true,
});

conn.once("open", (_) => {
  console.log("Database connected:", mongoUrl);
});

conn.on("error", (err) => {
  console.error("connection error:", err);
});

// PATHS
// user
app.use("/u", userRoutes);
// seller
app.use("/s", (req, res, next) => setType("admin", req, next), authRoutes); // not encrypted routes
app.use("/s", decryptAccessToken, verifySeller, sellerRoutes); // s stands for seller
