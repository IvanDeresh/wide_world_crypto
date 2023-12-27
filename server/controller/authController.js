import User from "../model/User.js";
import Roles from "../model/Roles.js";
export const registration = async (req, res) => {
  try {
  } catch (e) {}
};
export const login = async (req, res) => {
  try {
  } catch (e) {}
};
export const getUsers = async (req, res) => {
  try {
    const userRole = new Roles();
    const admineRole = new Roles({ value: "ADMIN" });
    await userRole.save();
    await admineRole.save();
    res.json(userRole);
  } catch (e) {}
};
