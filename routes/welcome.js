const express = require("express")
const router = express.Router()

router
    .get('/',(req, res) => {
        if (!usernameIsValid(req.session.username)) {
            res.render("pages/welcome")
        } else {
            res.redirect('/')
        }
    })
    .post('/setUsername', (req, res) => {
        req.session.username = req.body.username;
        req.session.serverName = req.body['serverName'];
        res.redirect('/')
    })

function usernameIsValid(username) {
    const MIN_USERNAME_LENGTH = 3;
    const MAX_USERNAME_LENGTH = 15;
    if (username != null &&
        isAlphanumeric(username) &&
        username.length > MIN_USERNAME_LENGTH &&
        username.length < MAX_USERNAME_LENGTH) {
            return true;
    } else {
        return false;
    }
}

// SOURCE: https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
function isAlphanumeric(string) {
    return string.match(/^[0-9a-z]+$/);
}

module.exports = router