import axios from 'axios'
require('dotenv').config
const apiKey = process.env.REACT_APP_API_KEY

export const GetTopAlbumsByTag = async (req, res) => {
  try {
    const { tag } = req.params
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${tag}&api_key=${apiKey}&format=json`
    )
    return res.status(200).json(response.data.results.albummatches.album)
  } catch (error) {
    throw error
  }
}
export const SearchAlbumsByName = async (req, res) => {
  try {
    const { name } = req.params
    const response = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${name}&api_key=${apiKey}&format=json`
    )
    return res.status(200).json(response.data.results.albummatches.album)
  } catch (error) {
    throw error
  }
}
