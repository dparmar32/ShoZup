const User = require('./User');
const Project = require('./Project');
const Inventory = require('./Inventory');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Inventory };
