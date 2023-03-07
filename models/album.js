'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      Album.hasMany(models.Review, { foreignKey: 'albumId' })
      Album.belongsToMany(models.User, {
        as: 'favoritelist',
        through: models.FavoriteList,
        foreignKey: 'userId'
      })
    }
  }
  Album.init(
    {
      name: DataTypes.STRING,
      artist: DataTypes.STRING,
      image: DataTypes.STRING,
      releaseDate: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Album',
      tableName: 'albums'
    }
  )
  return Album
}
