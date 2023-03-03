const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ReviewRouter = require('./ReviewRouter')
const AlbumRouter = require('./AlbumRouter')

Router.use('/users', UserRouter)
Router.use('/feed', ReviewRouter)
Router.use('/comments', AlbumRouter)

module.exports = Router
