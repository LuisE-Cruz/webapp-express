const express = require('express')
const app = express()
const movieRoute = require("./routes/movies")
const cors = require('cors')
require('dotenv').config()
app.use(express.static('public'))
app.use(cors())

const PORT = process.env.PORT || "my_port"

const connection = require("./data/linkup")
const errorsHandler = require('./middleware/errosHandler')
const notFound = require('./middleware/notFound')

app.listen(PORT, () => {
    console.log(`Post API listening on http://127.0.0.1:${PORT}`);
})

app.get('/', (req, res) => {
    res.send("Everything's here")
})

app.use('/movies', movieRoute)

app.use(notFound)
app.use(errorsHandler)