'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: 'albumId' })
    }
  }
  Review.init(
    {
      albumId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      grading: DataTypes.INTEGER,
      comment: DataTypes.STRING,
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
      modelName: 'Review',
      tableName: 'review'
    }
  )
  return Review
}
