const express = require("express")
const app = express()

app.set("view engine", "ejs")


app.get('/', (req, res) => {
    console.log('Here')
    res.send('Test')
})

app.listen(3000)