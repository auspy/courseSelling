export default function setType(type = "seller", req, next) {
  req.type = type;
  next();
}
