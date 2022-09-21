"use strict";

const dotenv = require('dotenv');
const connectdb = require('../config/config_db.js');
const categorys = require('../data_categorys.js');
const Category = require('../models/category_model.js');

dotenv.config();
connectdb(process.env.MONGO_URI).
    then(d => {
        Product.collection.drop().
            then(dd => {
                const products = fake_products(process.env.DUMMY_PRODUCTS || 10);
                products.forEach((product_data, i) => {
                    const product = new Product(product_data);
                    product.save()
                        .then(data => {
                            console.log(`Product Nº${i + 1} added.`);
                        }).catch(error => {
                            console.error(error);
                            process.exit(1);
                        });
                });//foreach
            }).catch(error => {
                console.error(error);
                process.exit(1);
            });
    }).catch(error => {
        console.error(error);
        process.exit(1);
    });