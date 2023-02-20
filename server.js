const express = require("express")
const session = require('express-session')
const dotenv = require('node-env-file')

const app = express()
let env = dotenv('./.env')

app.use(session({
    name: 'session',
    secret: env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true
}))

app.use(express.static("public"))
app.set("view engine", "ejs")

const welcomeRouter = require('./welcome')
app.use('/welcome', welcomeRouter)
const chatroomRouter = require('./chatroom')
app.use('/', chatroomRouter)

app.listen(3000)