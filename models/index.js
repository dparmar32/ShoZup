const User = require('./User');
const Project = require('./Project');
const Inventory = require('./Inventory');

/* This is telling the `User` model that it has many `Project`s. */
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

/* This is telling the `Project` model that it belongs to a `User`. */
Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Inventory };
