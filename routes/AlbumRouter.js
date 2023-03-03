const Router = require('express').Router()
const controller = require('../controllers/AlbumController')

Router.get('/', controller.GetAlbums)
Router.get('/:album_id', controller.GetAlbumDetails)

module.exports = Router
