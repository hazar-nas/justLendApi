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

app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(5000, () => console.log('Server running at port 5000'))
