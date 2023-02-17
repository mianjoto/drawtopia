const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log('Here')
    res.send('Test')
})

app.listen(3000)