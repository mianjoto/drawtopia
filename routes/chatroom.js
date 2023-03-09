const express = require("express")
const session = require("express-session")
const router = express.Router()

router.get("/", (req, res) => {
    let username = req.session.username;
    if (!username) {
        res.redirect('/welcome')
    } else {
        res.render("pages/chatroom", { username : username })
    }
})

module.exports = router