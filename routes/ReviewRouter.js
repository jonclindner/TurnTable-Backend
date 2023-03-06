const Router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

Router.get('/:review', controller.GetReviews)
Router.post(
  '/',
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
