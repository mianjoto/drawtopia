const Sequelize = require('sequelize')

const sequelize = require('../config/database')
const Scribble = require('./scribble');
  
const User = sequelize.define('user', {
    user_id:{
        type:Sequelize.INTEGER,

        autoIncrement:true,

        allowNull:false,

        primaryKey:true
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.hasMany(Scribble, { foreignKey: 'user_id' });
Scribble.belongsTo(User, { foreignKey: 'user_id' });

module.exports = User