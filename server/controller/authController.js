import User from "../model/User.js";
import Roles from "../model/Roles.js";
import bcrypt from "bcrypt";
import UserService from "../service/User.js";
import TokenService from "../service/Token.js";
import dotenv from "dotenv";
import { validationResult } from "express-validator";
dotenv.config();

export const registration = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Registration error", errors: errors.array() });
    }

    const { username, password, email } = req.body;

    const userData = await UserService.registration(email, password, username);

    res.cookie("refreshToken", userData.tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
    });

    return res.status(200).json({
      message: "Registration successful",
      user: userData,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: e.message });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userData = await UserService.login(username, password);
    res.cookie("refreshToken", userData.tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
    });
    return res.json({
      message: "login successful",
      user: userData,
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
export const updateRole = async (req, res) => {
  try {
    const { role, username } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    user.roles = role.toUpperCase();
    await user.save();

    return res.status(200).json({ message: `Succesfull changed on  ${role}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const refresh = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await UserService.refresh(refreshToken);
    res.cookie("refreshToken", userData.tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      httpOnly: true,
    });
    return res.json({
      message: "login successful",
      user: userData,
    });
  } catch (e) {}
};
export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await UserService.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  } catch (e) {}
};
