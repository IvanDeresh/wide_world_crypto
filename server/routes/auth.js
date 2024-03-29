import { Router } from "express";
import {
  login,
  registration,
  getUsers,
  updateRole,
  logout,
  refresh,
} from "../controller/authController.js";
import { check } from "express-validator";
import {
  authMiddleware,
  accessTokenMiddleware,
} from "../middleware/authMiddleware.js";

import { roleMiddleware } from "../middleware/roleMiddleware.js";
const router = new Router();
router.post("/login", login);
router.post("/logout", logout);
router.post(
  "/registration",
  [
    check("username", "Name can't be empty").notEmpty(),
    check(
      "password",
      "password cannot be shorter than 8 characters and longer than 16"
    ).isLength({ min: 8, max: 16 }),
  ],
  registration
);
router.put("/update", updateRole);
router.get("/refresh", refresh);
router.get("/users", accessTokenMiddleware, getUsers);
export default router;
