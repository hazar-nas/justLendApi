const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const db = require('./config/Database.js')
const router = require('./routes/index.js')
// const path =require( 'path'
// const findConfig =require( 'f'

const app = express()
app.get('/', (req, res) => {
  res.json({ message: 'hi' })
})

app.use(
  cors({
    credentials: true,
    origin: 'http://lovely-dieffenbachia-81aa0c.netlify.app/',
  })
)
app.use(cookieParser())
app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
