import fake_products from "../utils/fake_products.js";
let products = fake_products(10);


function get_products(req, res) {
    res.json(products);
}//get_products

function put_product(req, res) {
    const product = { ...req.body, id: products.length + 1 };
    products.push(product);
    res.json(product);
}//put_product

const product_controller = {
    get_products: get_products,
    put_product: put_product
}

export default product_controller;