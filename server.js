const express = require("express")
const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get('/welcome', (req, res) => {
    res.render("welcome")
})

const chatroomRouter = require('./chatroom')
app.use('/', chatroomRouter)

app.listen(3000)