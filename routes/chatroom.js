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
    const { image, chatroom, author_name, latitude, longitude } = req.body;
    
    console.log(image, chatroom, author_name, latitude, longitude);
    try {
      const scribble = new Scribble({
        image,
        chatroom,
        author_name,
        latitude,
        longitude,
      });

      scribble.save();
      
      res.status(201).json({ success: true, scribble });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to create scribble.' });
    }
});

module.exports = router