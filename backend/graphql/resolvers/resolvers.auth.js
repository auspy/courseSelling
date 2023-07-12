import { Admin, User } from "../../mongoose/modals/modals.js";
import { encryptAccessToken } from "../../src/helper/jwtToken.js";

const resolverAuth = {
  login: async (parent, args) => {
    let type = User;
    const { username, password, role } = args;
    if (role === "ADMIN") {
      type = Admin;
    }
    const user = await type.findOne({ username });
    const token = encryptAccessToken({ username });
    if (!token) {
      return {
        msg: "Token was not created",
        status: "failed",
      };
    }
    if (!user) {
      return {
        msg: "Invalid user, user not found",
        status: "failed",
      };
    }
    if (password !== user.password) {
      return {
        msg: "Invalid user, wrong password",
        status: "failed",
      };
    }
    return {
      msg: "login success",
      token,
      status: "success",
      data: user,
    };
  },
  register: async (parent, args) => {
    let type = User;
    const { user } = args;
    const { role, username } = user;
    if (role === "ADMIN") {
      type = Admin;
    }
    const doc = await type.findOne({ username });
    if (doc) {
      return {
        msg: "Invalid user, user already exists",
        status: "failed",
      };
    }
    const newUser = new type(user);
    const savedUser = await newUser.save();
    if (!savedUser) {
      return {
        msg: "User not saved",
        status: "failed",
      };
    }
    return {
      msg: "User created successfully",
      status: "success",
      data: savedUser,
    };
  },
};

export default resolverAuth;
