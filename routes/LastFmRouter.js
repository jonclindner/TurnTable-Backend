const Router = require('express').Router()
const controller = require('../controllers/LastFmController')

Router.get('/SearchAlbumsByName/:name', controller.SearchAlbumsByName)
Router.get('/GetTopAlbumsByTag/:tag', controller.GetTopAlbumsByTag)

module.exports = Router
