import User from "../model/User.js";
import Roles from "../model/Roles.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { validationResult } from "express-validator";
dotenv.config();
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
};
const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });
};
export const registration = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "registration error", errors: errors });
    }
    const { username, password, email } = req.body;
    const candidate = await User.findOne({ username });
    if (candidate) {
      return res.status(400).json({ message: "User already exist" });
    }
    var hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Roles.findOne({ value: "USER" });
    const user = new User({
      username,
      email,
      password: hashPassword,
      roles: [userRole.value],
    });
    const userWithoutPassword = {
      username: user.username,
      email: user.email,
      roles: user.roles,
    };
    await user.save();
    return res
      .status(200)
      .json({ message: "Registration successful", user: userWithoutPassword });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Registration error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userWithoutPassword = {
      username: "",
      email: "",
    };
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    } else {
      userWithoutPassword.email = user.email;
      userWithoutPassword.roles = user.roles;
      userWithoutPassword.username = user.username;
    }
    const validPasword = bcrypt.compareSync(password, user.password);
    if (!validPasword) {
      return res.status(401).json({ message: "Password error" });
    }
    const token = generateAccessToken(user._id, user.roles);
    return res.json({
      token,
      message: "login successful",
      user: userWithoutPassword,
    });
  } catch (e) {
    console.log(e);
    res.status(402).json({ message: "Login error" });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const usersAll = {
      username: users.username,
      password: users.password,
    };
    res.json({ usersAll, message: "All users" });
  } catch (e) {
    res.status(404).json({ message: "Server error" });
  }
};
