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

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
