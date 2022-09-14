import express from "express";
const router = express.Router();
import product_controller from "../controllers/products_controller.js";

router.get('/products', product_controller.getall_products);
router.get('/products/:id', product_controller.getone_product);
router.post('/products', product_controller.create_product);

export default router;