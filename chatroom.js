const express = require("express")
const router = express.Router()

router.get("/", requireLogin, (req, res) => {
    res.render("chatroom")
})

function requireLogin(req, res, next) {
    let userLoggedIn = isUserLoggedIn()
    if (userLoggedIn) {
        next()
    } else {
        res.redirect('/welcome')
    }
}

function isUserLoggedIn() {
    // TODO: Replace with session handling logic
    return false
}

module.exports = router