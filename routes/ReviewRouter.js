const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/:review', controller.GetReviews)
Router.get('/:review_id', controller.GetReviewDetails)
Router.post('/:user_id', controller.CreateReview)
Router.put('/:review_id', controller.UpdateReview)
Router.delete('/:review_id', controller.DeleteReview)

module.exports = Router
