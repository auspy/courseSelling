import { Admin, User } from "../../mongoose/modals/modals.js";
import { encryptAccessToken } from "../helper/jwtToken.js";

export default async function login(req, res) {
  try {
    const tp = req.type;
    const { username, password } = req.body;
    if (!(username && password)) {
      return res
        .status(401)
        .json({ error: "Invalid user, missing login data", status: "failed" });
    }
    console.log("type of login", tp);
    let type;
    if (tp === "admin") {
      // seller login
      type = Admin;
    } else {
      // user login
      type = User;
    }
    const user = await type.findOne({ username });
    if (!user) {
      return res
        .status(403)
        .json({ error: "Invalid user, user not found", status: "failed" });
    }
    if (user.password !== password) {
      return res
        .status(403)
        .json({ error: "Invalid user, wrong password", status: "failed" });
    }
    const token = encryptAccessToken({ username });
    if (!token) {
      return res
        .status(500)
        .json({ error: "Token was not created", status: "failed" });
    }
    console.log("user found", user);
    res.status(200).json({
      msg: "login success",
      token,
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(`Error in login: ${error.message}`);
    res.status(401).json({ error: error.message, status: "failed" });
  }
}
