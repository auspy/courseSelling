import jwt from "jsonwebtoken";
const encryptAccessToken = (user) => {
  const secret = process.env.JWT_SECRET;
  if (!(user && secret)) return null;
  return jwt.sign({ user }, secret, {
    expiresIn: "1d",
  });
};

const decryptAccessTokenMW = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const user = decryptAccessToken(authHeader);
    if (!(user && user.username)) {
      console.log("Error in decryptAccessToken", user, user.username);
      return res.status(403).json({
        error: err?.message || "Missing user in token",
        status: "failed",
      });
    }
    req.user = user;
    next();
  } else {
    res.status(401).json({ error: "Access token not found", status: "failed" });
  }
};

const decryptAccessToken = (accessToken) => {
  if (accessToken) {
    const token = accessToken.split(" ")[1];
    return jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err || !data || !data.user?.username) {
        console.log("Error in decryptAccessToken", data, data.user.username);
        return null;
      }
      console.log("User found in token", data.user);
      return data.user;
    });
  }
};

export { encryptAccessToken, decryptAccessTokenMW, decryptAccessToken };
