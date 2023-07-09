import { User } from "../../mongoose/modals/modals.js";

// could have used the same verifySeller.js file but i wanted to keep it separate so that more fea
export default async function verifyUser(req, res, next) {
  if (req.user) {
    try {
      const user = await User.findOne(req.user);
      if (!user) {
        return res.status(403).json({ error: "User not found" });
      }
      console.log("User found", user);
      req.user = { id: user._id };
      next();
    } catch (error) {
      console.log(`Error in verifyUser: ${error.message}`);
      res.status(401).json({ error: error.message, status: "failed" });
    }
  } else {
    res.status(401).json({ error: "Invalid user, missing data" });
  }
}
