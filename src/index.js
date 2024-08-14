import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductRoute from "./routes/Product.route.js";

dotenv.config();
console.log("hghh");
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", ProductRoute);

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error.message });
//   }
// });

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
