// import models
const Category = require('./Category');
const Product = require('./Product')

//products belongsTo Category
Product.belongsTo(Category,
    {
        foreignKey: 'category_id',
        onDelete: 'SET NULL'
    });
// Categories have many Products - https://sequelize.org/v4/manual/tutorial/associations.html#creating-elements-of-a-belongsto-has-many-or-hasone-association
Category.hasMany(Product, {
    foreignKey: 'category_id',
        onDelete: 'SET NULL'
});
module.exports = {Category, Product};