import { Router } from "express";
import { login, registration, getUsers } from "../controller/authController.js";
const router = new Router();
router.post("/login", login);
router.post("/register", registration);
router.get("/users", getUsers);
export default router;
