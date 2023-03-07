const Router = require('express').Router()
const ReviewRouter = require('./ReviewRouter')
const AlbumRouter = require('./AlbumRouter')
const LastFmRouter = require('./LastFmRouter')

Router.use('/review', ReviewRouter)
Router.use('/album', AlbumRouter)
Router.use('/LastFm', LastFmRouter)

module.exports = Router
