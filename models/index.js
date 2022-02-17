// import models
const User = require('./User');
// const Category = require('./Category');
const Product = require('./Product')


//products belongsTo Category
Product.belongsTo(User,
    {
        foreignKey: 'user_id',
    });
// Categories have many Products - https://sequelize.org/v4/manual/tutorial/associations.html#creating-elements-of-a-belongsto-has-many-or-hasone-association
User.hasMany(Product, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
module.exports = {User, Product};