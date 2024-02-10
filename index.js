import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import { StatusCodes } from 'http-status-codes'

mongoose.connect(process.env.DB_URL)

const app = express()

app.use(express.json())
app.use((_, req, res, next) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: '資料格式錯誤'
  })
})

app.listen(4000, () => {
  console.log('專題平安')
})
