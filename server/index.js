import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.listen(3003, () => {
  console.log(`listening on http://localhost:3003`);
});
mongoose.connect("mongodb://localhost:27017/");
