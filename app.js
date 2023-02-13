const Sequelize = require('sequelize')

const sequelize = require('./config/database')

const user = require('./models/user')
const scribble = require('./models/scribble')

sequelize.sync() 

user.create({
    user_name: 'John Doe',
    user_password: 'password'
  })
//sequelize.sync({force:true})