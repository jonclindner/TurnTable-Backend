const { User, Album } = require('../models')

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
  GetUserProfile
}
