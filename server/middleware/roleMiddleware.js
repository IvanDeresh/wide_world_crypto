import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export function roleMiddleware(roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ message: "User is not registered " });
      }
      const { roles: userRoles } = jwt.verify(token, process.env.SECRET_KEY);
      let hashRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hashRole = true;
        }
      });
      if (!hashRole) {
        return res.status(403).json({ message: "You dont have a access" });
      }
      next();
    } catch (e) {
      console.log(e);
      return res.status(403).json({ message: "User is not registered " });
    }
  };
}
