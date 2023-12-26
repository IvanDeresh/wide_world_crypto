import express from "express";
import { fetchNews } from "../controller/newsController.js";
const router = new express.Router();
router.get("/news", fetchNews);

export default router;
