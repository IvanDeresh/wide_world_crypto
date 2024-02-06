import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import TokenService from "../service/Token.js";
dotenv.config();
export function authMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "User is not registered " });
    }
    const decodedData = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: "User is not registered " });
  }
}
export function accessTokenMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return new Error("Unauth user2");
    }
    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
      return new Error("Unauth user3");
    }
    const userData = TokenService.validateAccessToken(accessToken);
    if (!userData) {
      return new Error("Unauth user4");
    }
    req.user = userData;
    next();
  } catch (e) {
    return new Error("Unauth user1");
  }
}
