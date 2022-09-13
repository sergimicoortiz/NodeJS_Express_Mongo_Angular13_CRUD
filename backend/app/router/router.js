import express from "express";
import product_controller from "../controllers/products_controller.js";
const router = express.Router();

router.get('/products', product_controller.get_products());
export default router;