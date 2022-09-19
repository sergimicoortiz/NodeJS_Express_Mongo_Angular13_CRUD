import express from "express";
const router = express.Router();
import product_controller from "../controllers/products_controller.js";
import category_controller from "../controllers/category_controller.js";

//products
router.get('/products', product_controller.getall_products);
router.get('/products/:id', product_controller.getone_product);
router.post('/products', product_controller.create_product);
router.delete('/products/:id', product_controller.delete_product);
router.delete('/products_all', product_controller.deleteAll_product);
router.put('/products/:id', product_controller.update_product);

//category
router.get('/category', category_controller.getall_category);
router.get('/category/:id', category_controller.getone_category);
router.post('/category', category_controller.create_category);
router.delete('/category/:id', category_controller.delete_category);
router.put('/category/:id', category_controller.update_category);
router.delete('/category_all', category_controller.deleteAll_category);


export default router;