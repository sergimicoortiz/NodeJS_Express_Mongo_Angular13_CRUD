"use strict";

import dotenv from "dotenv";
import connectdb from "../config/config_db.js";
import fake_products from "./fake_products.js";
import Product from "../models/product_model.js";
import Category from '../models/category_model.js';
import categorys from './data_categorys.js';

async function main() {
    dotenv.config();
    try {
        await connectdb(process.env.MONGO_URI)
        const products = fake_products(process.env.DUMMY_PRODUCTS || 10);
        await Product.collection.drop();
        await Category.collection.drop();
        categorys.forEach(async (e) => {
            const new_category = new Category(e);
            await new_category.save();
            console.log(`Category ${e.category_name} added`);
        });//end foreach
        products.forEach(async (e) => {
            const new_product = new Product(e);
            await new_product.save();
            console.log(`Product ${e.name} added`);
        });//end foreach
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}//main

main();