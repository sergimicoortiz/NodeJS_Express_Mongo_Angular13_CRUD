import mongoose from "mongoose";

const product_shcema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    owner: String,
    category: String,
    picture: [String]
});

const Product = mongoose.model('Product', product_shcema);

export default Product;