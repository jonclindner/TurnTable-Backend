'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      Album.hasMany(models.Review)
    }
  }
  Album.init(
    {
      albumId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      artist: DataTypes.STRING,
      image: DataTypes.STRING,
      releaseDate: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Album',
      tableName: 'album'
    }
  )
  return Album
}
