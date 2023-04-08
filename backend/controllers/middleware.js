import { db } from "../utils/sqlConfig.js";
const Form = db.form;
import jwt from "jsonwebtoken";

function verifyUserToken(req, res, next) {
  var token = req.headers["x-access-token"]; // or we can use bearer "req.headers.authorization?.split(' ')[1];"
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    req.user = { id: decoded.id, email: decoded.email };
    console.log("Decoded ", decoded);
    next();
  });
}

function verifyUserToken(req, res, next) {
  var token = req.headers["x-access-token"]; // or we can use bearer "req.headers.authorization?.split(' ')[1];"
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err || decoded.isAdmin != true)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    req.admin = { id: decoded.id, email: decoded.email };
    console.log("Decoded ", decoded);
    next();
  });
}

export { verifyUserToken };
