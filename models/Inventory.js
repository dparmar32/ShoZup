const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {
}
Inventory.init(
    {
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        img: {
            // LONGBLOB
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Inventory',
    }
);
module.exports = Inventory;