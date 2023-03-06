const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')
const AlbumRouter = require('./AlbumRouter')
const LastFmRouter = require('./LastFmRouter')

Router.use('/users', UserRouter)
Router.use('/feed', ReviewRouter)
Router.use('/comments', AlbumRouter)
Router.use('/LastFm', LastFmRouter)

module.exports = Router
