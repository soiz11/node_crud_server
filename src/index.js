import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

try {
  await mongoose.connect(`${process.env.MONGODB_URI}/mydb`);
  console.log("db connected");
  app.listen(3000, () => {
    console.log(`running port 3000`);
  });
} catch (e) {
  console.log(e);
}

app.get("/post", (req, res) => {
  res.send("hello");
});

console.log("dsdsddww");
