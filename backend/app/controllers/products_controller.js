import Product from "../../models/product_model.js";
//import fake_products from "../utils/fake_products.js";

//let products = fake_products(10);

async function getall_products(req, res) {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500);
    }//end trycath
}//getall_products

async function getone_product(req, res) {
    try {
        const id = req.params.id
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500);
    }//end try cath
}//getone_product

async function create_product(req, res) {
    try {
        const product_data = {
            name: req.body.name || "pepe",
            price: req.body.price || 0,
            description: req.body.description || "pepe desc"
        };
        const product = new Product(product_data);
        await product.save();
        res.json(product_data);
    } catch (error) {
        res.status(500);
    }//end try cath
}//create_product

async function delete_product() {

}

const product_controller = {
    getall_products: getall_products,
    getone_product: getone_product,
    create_product: create_product,
    delete_product: delete_product
}

export default product_controller;