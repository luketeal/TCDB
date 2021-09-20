const User = require('./User');
const Disposition = require('./Disposition');

User.hasMany(Disposition, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
});

Disposition.belongsTo(User, {
    foreignKey: 'badge_id',
    targetKey: 'badge_id'
});

module.exports = {
    User,
    Disposition
  };