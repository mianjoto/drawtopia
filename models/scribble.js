const Sequelize = require('sequelize')

const sequelize = require('../config/database')
  
const Scribble = sequelize.define('scribble', {
    scribble_id:{
        type:Sequelize.INTEGER,

        autoIncrement:true,

        allowNull:false,

        primaryKey:true
    },
    image: {
        type: Sequelize.BLOB('medium'),
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