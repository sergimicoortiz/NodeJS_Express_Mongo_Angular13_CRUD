import mongoose from "mongoose";

const product_shcema = new mongoose.Schema({
    //id: Number,
    name: String,
    price: Number,
    description: String
});

const Product = mongoose.model('Product', product_shcema);

export default Product;