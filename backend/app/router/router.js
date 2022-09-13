import express from "express";
const router = express.Router();
import product_controller from "../controllers/products_controller.js";

router.get('/products', product_controller.get_products);
router.post('/products', product_controller.put_product);

export default router;