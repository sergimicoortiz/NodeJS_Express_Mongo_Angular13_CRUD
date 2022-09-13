import express from "express";
const router = express.Router();
import fake_products from "../utils/fake_products.js";
let products = fake_products(10);

router.get('/products', (req, res) => {
    res.json(products);
});//get products

router.post('/products', (req, res) => {
    console.log(req.body);
    res.send('pepe');
})
export default router;