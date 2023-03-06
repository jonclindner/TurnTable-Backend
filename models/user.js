'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Review, { foreignKey: 'albumId' }),
        User.hasMany(models.Album, { foreignKey: 'albumId' })
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      favoriteAlbums: DataTypes.INTEGER,
      albumId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: true,
        references: {
          model: 'albums',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
