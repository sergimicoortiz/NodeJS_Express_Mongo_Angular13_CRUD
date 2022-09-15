import mongoose from "mongoose";

const Category_shcema = new mongoose.Schema({
    category_name: String,
    category_picture: String
});

const Category = mongoose.model('Category', Category_shcema);

export default Category;