import mongoose from "mongoose";

const category_shcema = new mongoose.Schema({
    category_name: String,
    category_picture: String
});

const Category = mongoose.model('Category', category_shcema);

export default Category;