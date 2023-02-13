const Sequelize = require('sequelize')

const sequelize = require('../config/database')
  
const Scribble = sequelize.define('scribble', {
    image: {
        type: Sequelize.BLOB,
        allowNull: false
    },
    author_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time_posted: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
})
  
module.exports = Scribble