import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import db from './config/Database.js'
import router from './routes/index.js'
// import path from 'path'
// import findConfig from 'f'
dotenv.config()
const app = express()

app.get('/', (req, res) => {
  res.json({ message: server })
})

app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
