import { createProduct } from "../controllers/Product.controller.js";
import express from "express";

const router = express.Router();

router.post("/", createProduct);

export default router;
