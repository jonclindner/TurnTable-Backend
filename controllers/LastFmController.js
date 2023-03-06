const axios = require('axios')
require('dotenv').config()
const API_KEY = process.env.API_KEY

const GetTopAlbumsByTag = async (req, res) => {
  try {
    const { tag } = req.params
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=${API_KEY}&format=json`
    )
    const resultArray = response.data.albums.album
    const responseArray = []

    resultArray.forEach((album) => {
      responseArray.push({
        albumName: album.name,
        mbid: album.mbid,
        artist: album.artist,
        medium_image_url: album.image[2],
        large_image_url: album.image[3]
      })
    })
    return res.status(200).json(responseArray)
  } catch (error) {
    throw error
  }
}
const SearchAlbumsByName = async (req, res) => {
  try {
    const { name } = req.params
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${name}&api_key=${API_KEY}&format=json`
    )
    const resultArray = response.data.results.albummatches.album
    const responseArray = []

    resultArray.forEach((album) => {
      responseArray.push({
        albumName: album.name,
        mbid: album.mbid,
        artist: album.artist,
        medium_image_url: album.image[2],
        large_image_url: album.image[3]
      })
    })
    return res.status(200).json(responseArray)
  } catch (error) {
    throw error
  }
}
const GetAlbumInfo = async (req, res) => {
  try {
    const { album, artist } = req.params
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${API_KEY}&artist=${artist}&album=${album}&format=json`
    )
    return res.status(200).json(response)
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetTopAlbumsByTag,
  SearchAlbumsByName,
  GetAlbumInfo
}
