"use strict";

const dotenv = require('dotenv');
const connectdb = require('../config/config_db.js');
const categorys = require('../data_categorys.js');
const Category = require('../models/category_model.js');

dotenv.config();
connectdb(process.env.MONGO_URI).
    then(d => {
        Category.collection.drop().
            then(dd => {
                categorys.forEach((category_data, i) => {
                    const category = new Category(category_data);
                    category.save()
                        .then(data => {
                            console.log(`category Nº${i + 1} added.`);
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