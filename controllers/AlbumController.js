const { Album } = require('../models')

const CreateAlbum = async (req, res) => {
  try {
    console.log({ ...req.body })
    const response = await Album.create({ ...req.body })
    res.send(response)
  } catch (error) {
    throw error
  }
}

const GetAlbums = async (req, res) => {
  try {
    const albums = await albums.findAll()
    res.send(albums)
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
