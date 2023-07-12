// user sends user data: username and password
// we check if the user exists in the database
// if the user exists, we check if the password is correct
// if the password is correct, we send the user a token

import { Admin, User } from "../../mongoose/modals/modals.js";
import { encryptAccessToken } from "../helper/jwtToken.js";

// if no user exists then new user is created
export default async function register(req, res) {
  try {
    const tp = req.type;
    const { username, password } = req.body;
    if (!(username && password)) {
      return res
        .status(401)
        .json({ error: "Invalid user, missing register data" });
    }
    let type;
    if (tp === "admin") {
      // seller register
      type = Admin;
    } else {
      // user register
      type = User;
    }
    console.log("type is", type, tp);
    const doc = await type.findOne({ username });
    console.log("doc", doc);
    if (doc) {
      return res
        .status(403)
        .json({ error: "Invalid user, user already exists" });
    }
    // const token = encryptAccessToken({ username, id: doc._id });
    // if (!token) {
    //   return res
    //     .status(500)
    //     .json({ error: "Token was not created", status: "failed" });
    // }
    const newUser = await new type({
      username,
      password,
    }).save();
    console.log("user created", newUser);
    res.status(200).json({ msg: "user created successfully", data: newUser }); // token is sent to the user
  } catch (error) {
    console.log(`Error in register: ${error.message}`);
    res.status(401).json({ error: error.message, status: "failed" });
  }
}
