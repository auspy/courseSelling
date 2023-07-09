import jwt from "jsonwebtoken";
const encryptAccessToken = (user) => {
  const secret = process.env.JWT_SECRET;
  if (!(user && secret)) return null;
  return jwt.sign({ user }, secret, {
    expiresIn: "1d",
  });
};

const decryptAccessToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const accessToken = authHeader.split(" ")[1];
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, data) => {
      if (err || !data || !data.user?.username) {
        console.log("Error in decryptAccessToken", data, data.user.username);
        return res.status(403).json({
          error: err?.message || "Missing data in token",
          status: "failed",
        });
      }
      console.log("User found in token", data);
      req.user = data.user;
      next();
    });
  } else {
    res.status(401).json({ error: "Access token not found", status: "failed" });
  }
};

export { encryptAccessToken, decryptAccessToken };
