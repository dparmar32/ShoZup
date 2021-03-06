const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {
}

/* This is the sequelize syntax for creating a model. */
Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
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
        price: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        img: {
            // LONGBLOB
            type: DataTypes.STRING,
        },
        size: {
            // LONGBLOB
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Project;
