import fake_products from "../utils/fake_products.js";
let products = fake_products(10);


function get_products(req, res) {
    res.json(products);
}

const product_controller = {
    get_products
}

export default product_controller;