import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import newsRoutes from "./routes/news.js";
const app = express();
app.use(cors());
app.use("/api", newsRoutes);
mongoose
  .connect("mongodb://localhost:27017/crypto")
  .then(() => {
    app.listen(3003, () =>
      console.log(`Server is listening on http://localhost:3003`)
    );
  })
  .catch((error) => console.error(`Error connecting to MongoDB: ${error}`));
