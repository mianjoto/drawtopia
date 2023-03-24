const express = require("express")
const session = require("express-session")
const router = express.Router()

const sequelize = require('../config/database')
const Scribble = require('../models/scribble');
sequelize.sync()

router.get("/", (req, res) => {
    let username = req.session.username;
    let serverName = req.session.serverName;
    if (!username || !serverName) {
        res.redirect('/welcome')
    } else {
        res.render("pages/chatroom", {
          username,
          serverName
        })
    }
})

router.post('/sendMessage', (req, res) => {
    const image = req.body.image;
    const chatroom = req.session.serverName;
    const author_name = req.session.username;
    const longitude = req.session.longitude;
    const latitude = req.session.latitude;
  
    try {
      const scribble = new Scribble({
        image,
        chatroom,
        author_name,
        longitude,
        latitude,
      });

      scribble.save();
      const successMessage = `Successfully saved scribble to database from author ${author_name} in the ${chatroom} chatroom.`;
      res.status(201).json({ success: true, message: successMessage});
      console.log(successMessage);
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to create scribble.' });
    }
});

module.exports = router