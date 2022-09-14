import connectdb from "../config/config_db.js"
import fake_products from "./fake_products.js"
connectdb();
const products = fake_products(10);
console.log(products);