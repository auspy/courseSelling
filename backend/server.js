import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes.js";
import authRoutes from "./routes/authRoutes.js";

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
});

conn.once("open", (_) => {
  console.log("Database connected:", mongoUrl);
});

conn.on("error", (err) => {
  console.error("connection error:", err);
});

// PATHS
app.use("/courses", courseRoutes);
app.use("/", authRoutes);
