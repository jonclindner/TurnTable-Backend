const { User, Album } = require('../models')

const CreateUsers = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndAlbums = await User.findByPk(req.params.user_id)
    res.send(userAndAlbums)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUserProfile,
  CreateUsers
}
