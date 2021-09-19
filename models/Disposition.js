const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Disposition extends Model {}

Disposition.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    part_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disposition: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    badge_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'badge_id',
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'disposition',
  }
);

module.exports = Disposition;
