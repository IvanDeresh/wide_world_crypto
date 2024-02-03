import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import newsRoutes from "./routes/news.js";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.PORT || 3005;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/api", newsRoutes);
mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost:27017/crypto")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`Server is listening on http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));
