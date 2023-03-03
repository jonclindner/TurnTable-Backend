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
      userId: DataTypes.INTEGER,
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      favoriteAlbums: DataTypes.INTEGER,
      albumId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'albums',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'user'
    }
  )
  return User
}
