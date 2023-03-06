const { Album } = require('../models')

const CreateAlbum = async (req, res) => {
  try {
    const album = await Album.create()
    res.send(album)
  } catch (error) {
    throw error
  },




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
  GetAlbumDetails,
  CreateAlbum
}
