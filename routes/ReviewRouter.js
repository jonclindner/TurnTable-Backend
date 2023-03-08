const Router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

Router.get('/:review', controller.GetReviews)
Router.get('/get-reviews-by-user-id/:user_id', controller.GetReviewsByUserId)
Router.get('/get-reviews-by-album-id/:album_id', controller.GetReviewsByAlbumId)

Router.post(
  '/create-review/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)

Router.put(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
Router.delete(
  '/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

module.exports = Router
