const Router = require('express').Router()
const ReviewRouter = require('./ReviewRouter')
const AlbumRouter = require('./AlbumRouter')
const LastFmRouter = require('./LastFmRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/review', ReviewRouter)
Router.use('/album', AlbumRouter)
Router.use('/LastFm', LastFmRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
