const connectToMongo = require('./db');
const express = require("express");

connectToMongo();

const app = express()
var cors = require('cors')
const port = 5000

app.use(express.json());
app.use(cors())

app.use('/api/layouts',require('./routes/layout'))

app.listen(port, () => {
  console.log(`backend on port ${port}`)
})