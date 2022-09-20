import Product from "../models/product_model.js";
import { FormatSuccess } from "../utils/responseApi.js";

async function getall_products(req, res) {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json(FormatError("An error has ocurred", res.statusCode));
    }//end trycath
}//getall_products

async function getone_product(req, res) {
    try {
        const id = req.params.id
        const product = await Product.findById(id);
        if (!product) {
            res.status(404).json(FormatError("Product not found", res.statusCode));
        } else {
            res.json(product);
        };
    } catch (error) {
        if (error.kind === 'ObjectId') { res.status(404).json(FormatError("Product not found", res.statusCode)); }
        else { res.status(500).json(FormatError("An error has ocurred", res.statusCode)); }
    }
};//getone_product

async function create_product(req, res) {
    try {
        const product_data = {
            name: req.body.name || null,
            price: req.body.price || 0,
            description: req.body.description || null,
            owner: req.body.owner || null,
            category: req.body.category || null,
            picture: req.body.picture || [null],
        };
        const product = new Product(product_data);
        const new_product = await product.save();
        res.json(new_product);
    } catch (error) {
        res.status(500).json(FormatError("An error has ocurred", res.statusCode));
    }//end try cath
}//create_product

async function delete_product(req, res) {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id);
        if (!product) { res.status(404).json(FormatError("Product not found", res.statusCode)); }
        res.json(FormatSuccess("Product deleted"));
    } catch (error) {
        if (error.kind === 'ObjectId') { res.status(404).json(FormatError("Product not found", res.statusCode)); }
        else { res.status(500).json(FormatError("An error has ocurred", res.statusCode)); }
    }//end try catch
}//delete_product

async function update_product(req, res) {
    try {
        const id = req.params.id
        const product_data = {
            name: req.body.name || null,
            price: req.body.price || 0,
            description: req.body.description || null,
            owner: req.body.owner || null,
            category: req.body.category || null,
            picture: req.body.picture || [null],
        };
        const update = await Product.findByIdAndUpdate(id, product_data);
        if (!update) { res.status(404).json(FormatError("Product not found", res.statusCode)); }
        res.json({ msg: "Product updated" })
    } catch (error) {
        if (error.kind === 'ObjectId') { res.status(404).json(FormatError("Product not found", res.statusCode)); }
        else { res.status(500).json(FormatError("An error has ocurred", res.statusCode)); }
    }
}//update_product

async function deleteAll_product(req, res) {
    try {
        const deleteALL = await Product.collection.drop();
        res.json(FormatSuccess("Colection products deleted"));
    } catch (error) {
        if (error.code === 26) { res.status(404).json(FormatError("Product colection not exist", res.statusCode)); }
        else { res.status(500).json(FormatError("An error has ocurred", res.statusCode)); }
    }
}//deleteAll_product

const product_controller = {
    getall_products: getall_products,
    getone_product: getone_product,
    create_product: create_product,
    delete_product: delete_product,
    update_product: update_product,
    deleteAll_product: deleteAll_product
}

export default product_controller;