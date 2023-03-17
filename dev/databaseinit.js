const Sequelize = require('sequelize')
const sequelize = require('../config/database')
const user = require('../models/user')
const scribble = require('../models/scribble')

console.log("About to clear the database...")

sequelize.sync() //initialize database 
// sequelize.sync({force:true}) //initialize and clear database 

console.log("Database is cleared! :)")