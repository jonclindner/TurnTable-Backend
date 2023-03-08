const { Album } = require('../models')
const { User } = require('../models')

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
const GetAlbumByNameAndArtist = async (req, res) => {
  let { artist, name } = req.params
  try {
    const albums = await Album.findAll({
      where: { name: name, artist: artist }
    })
    res.status(200).json(albums)
  } catch (error) {}
}

const GetFavList = async (req, res) => {
  let { user_id } = req.params
  try {
    const list = await User.findAll({
      where: { userId: user_id },
      include: [
        {
          model: Album,
          as: 'favoritelist',
          through: { attributes: [] }
        }
      ]
    })
    res.status(200).json(list)
  } catch (error) {}
}

module.exports = {
  GetAlbums,
  GetFavList,
  CreateAlbum,
  GetAlbumByNameAndArtist
}
