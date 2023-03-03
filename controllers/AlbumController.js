const { Album } = require('../models')

const GetAlbums = async (req, res) => {
  try {
    const users = await users.findAll()
    res.send(Album)
  } catch (error) {
    throw error
  }
}

const GetAlbumDetails = async (req, res) => {
  try {
    const albums = await User.findByPk(req.params.album_id)
    res.send(albums)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAlbums,
  GetAlbumDetails
}
