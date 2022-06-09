import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();

app.use(express.json());
app.use(cookieParser());

// Create Server
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({ ms: "Hello" });
});
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (err) {
    console.log(err);
  }
};
connectToDB();
app.listen(port, () => console.log(`Start Server on http://localhost:${port}`));
