const express = require("express")
const router = express.Router()

router
    .get('/',(req, res) => {
        res.render("welcome")
    })
    // ADD POST METHODS BELOW:

module.exports = router