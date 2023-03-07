const Router = require('express').Router()
const controller = require('../controllers/AlbumController')

Router.post('/create-album', controller.CreateAlbum)
Router.get('/get-albums', controller.GetAlbums)
Router.get('/get-album-details/:album_id', controller.GetAlbumDetails)
Router.get(
  '/get-album-by-name-and-artist/:artist/:name',
  controller.GetAlbumByNameAndArtist
)

module.exports = Router
