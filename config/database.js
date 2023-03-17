const Sequelize = require('sequelize')
const dotenv = require('node-env-file')

let env = dotenv('./.env')

const sequelize = new Sequelize(
    env.DATA_BASE_NAME,
    env.DATA_BASE_USER,
    env.DATA_BASE_PASSWORD, {
        dialect: 'mysql',        
        host: env.DATA_BASE_HOST,
        logging: false
    }
);

module.exports = sequelize