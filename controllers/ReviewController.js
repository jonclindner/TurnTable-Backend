const { Review } = require('../models')

// GET all reviews

const GetReviews = async (req, res) => {
  try {
    const review = await Review.findAll()
    res.send(review)
  } catch (error) {
    throw error
  }
}
const GetReviewsByUserId = async (req, res) => {
  let { user_id } = req.params
  try {
    const review = await Review.findAll({
      where: { userId: user_id }
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}
const GetReviewsByAlbumId = async (req, res) => {
  let { album_id } = req.params
  try {
    const review = await Review.findAll({
      where: { albumId: album_id }
    })
    res.send(review)
  } catch (error) {
    throw error
  }
}
// GET review by id

const GetReviewDetails = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.review_id)
    res.send(review)
  } catch (error) {
    throw error
  }
}

// CREATE review

const CreateReview = async (req, res) => {
  try {
    let reviewerId = parseInt(req.params.user_id)
    let reviewBody = {
      reviewId,
      ...req.body
    }
    let review = await Review.create(reviewBody)
    res.send(review)
  } catch (error) {
    throw error
  }
}

// UPDATE review

const UpdateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let updatedReview = await Review.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

// DELETE review
const DeleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await Review.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted review with an ID of ${reviewId}!` })
  } catch (error) {
    throw error
  }
}
// const GetReviewsByAlbumId = async (req, res) => {
//   try {
//     let albumId = parseInt(req.params.album_id)
//     await Review.findAll({ where: { id: albumId } })
//   }
// }

// Don't forget to export your functions
module.exports = {
  GetReviews,
  GetReviewsByUserId,
  GetReviewsByAlbumId,
  GetReviewDetails,
  CreateReview,
  UpdateReview,
  DeleteReview
}
