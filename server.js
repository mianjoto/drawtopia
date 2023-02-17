const express = require("express")
const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")

const welcomeRouter = require('./welcome')
app.use('/welcome', welcomeRouter)
const chatroomRouter = require('./chatroom')
app.use('/', chatroomRouter)

app.listen(3000)