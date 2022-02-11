const Category = require('../models/Category');

const categoryData =
    [
        {
            category_name: 'Sneakers',
        },
        {
            category_name: 'Heels',
        },
        {
            category_name: 'Flats',
        },
        {
            category_name: 'Boots',
        },
        {
            category_name: 'Sandals',
        },
        {
            category_name: 'Slippers',
        },
        {
            category_name: 'Wedges',
        },
    ];

const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;