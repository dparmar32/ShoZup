const {Product} = require('../models');

const ProductData =
    [
        {
            product_name: 'Nike',
            price: 99.99,
            category_id: 1,
        },
        {
            product_name: 'Crocs',
            price: 29.99,
            category_id: 3,
        },
        {
            product_name: 'INC International Concepts',
            price: 76.49,
            category_id: 2,
        },
        {
            product_name: 'Guess',
            price: 79.99,
            category_id: 4,
        },
        {
            product_name: 'Naturalizer',
            price: 109.95,
            category_id: 5,
        },
        {
            product_name: 'MICHAEL Michael Kors',
            price: 110.00,
            category_id: 7,
        },
        {
            product_name: 'Skechers',
            price: 39.99,
            category_id: 6,
        },
    ];
const seedProducts = () => Product.bulkCreate(ProductData);
module.exports = seedProducts;
