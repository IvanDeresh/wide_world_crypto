import express from "express";
import { createNews } from "../controller/newsController.js";
import { fetchNews } from "../controller/newsController.js";

const router = express.Router();

router.get("/news", fetchNews);
router.post("/createNews", createNews);

export default router;
