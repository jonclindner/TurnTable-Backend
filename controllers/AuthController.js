const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { name, email, password, genre } = req.body
    let passwordDigest = await middleware.hashPassword(password)
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
