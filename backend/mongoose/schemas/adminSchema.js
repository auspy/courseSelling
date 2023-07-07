import { Schema } from "mongoose";

const adminSchema = new Schema({
  username: String,
  password: String,
});

export default adminSchema;
