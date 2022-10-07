const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const db = require('./config/Database.js')
const router = require('./routes/index.js')

const app = express()
app.get('/', (req, res) => {
  res.json({ message: 'hi' })
})

var allowlist = ['https://main--lovely-dieffenbachia-81aa0c.netlify.app/']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate))
app.use(cookieParser())
app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
