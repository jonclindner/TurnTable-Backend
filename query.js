const { Album, Review, User, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const createNewUser = async (id) => {
  const results = await User.create({
    name: '',
    email: '',
    password: '',
    favoritealbum: ''
  })
}

const findAllUsers = async () => {
  const results = await User.findAll()
  stringify(results)
}

const updateUser = async () => {
  const result = await User.update(
    {
      favoritealbum: ''
    },
    { where: { favoritealbum: ' ' }, returning: true }
  )
  stringify(result)
}

const deleteWhere = async () => {
  const results = await user.destroy({ where: { name: '' } })
  stringify(results)
}

const run = async () => {
  try {
    // await createNewUser()
    // await findAllUsers()
    // await updateUser()
    // await deleteWhere()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
