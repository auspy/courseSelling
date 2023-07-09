import { Admin } from "../../mongoose/modals/modals.js";

/*
there can be multiple ways to verify a seller
    get id from the token : this is the best way as it is the most secure, but i need to learn how to do this.
    get id from params : but this can be used by anyone if they know the id
    get id from body : but this can be used by anyone if they know the id
*/

// we find then user and then send the user id to the next function
export default async function verifySeller(req, res, next) {
  if (req.user) {
    try {
      const user = await Admin.findOne(req.user);
      if (!user) {
        return res.status(403).json({ error: "Seller not found" });
      }
      console.log("Seller found", user);
      req.user = { id: user._id };
      next();
    } catch (error) {
      console.log(`Error in verifySeller: ${error.message}`);
      res.status(401).json({ error: error.message, status: "failed" });
    }
  } else {
    res.status(401).json({ error: "Invalid seller, missing data" });
  }
}

// 403 code means forbidden
// 401 code means unauthorized
// 200 code means ok
