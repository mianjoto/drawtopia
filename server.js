const express = require("express")
const session = require('express-session')
const welcomeRouter = require('./welcome')
const chatroomRouter = require('./chatroom')
const dotenv = require('node-env-file')
const bodyParser = require('body-parser')

const app = express()
let env = dotenv('./.env')

app.use(session({
    name: 'session',
    secret: env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("view engine", "ejs")

app.use('/', chatroomRouter)
app.use('/welcome', welcomeRouter)

app.listen(3000)