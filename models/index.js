const User = require('./User')
const Disposition = require('./Disposition')

// set up associations
User.hasMany(Disposition, {
    foreignKey: 'badge_id',
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE'
})

Disposition.belongsTo(User, {
    foreignKey: 'badge_id',
    targetKey: 'badge_id'
})

module.exports = {
    User,
    Disposition
  }