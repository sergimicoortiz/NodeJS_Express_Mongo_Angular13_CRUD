const faker = require('@faker-js/faker/locale/en')

function fake_products(n) {
    let products = [];

    for (let i = 0; i < n; i++) {
        const product = {
            id: i + 1,
            name: faker.commerce.product(),
            price: parseInt(faker.commerce.price(10, 300)),
            description: faker.lorem.paragraph(),
            owner: faker.name.firstName(),
            category: faker.commerce.productAdjective(),
            picture: ['pic1', 'pic2', 'pic3']
        };
        products.push(product);
    }//for

    return products;
}

export default fake_products;