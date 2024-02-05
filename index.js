import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

// 連線資料庫
mongoose.connect(process.env.DB_URL)

// 建立網頁伺服器
const app = express()

// 綁定4000 poort
app.listen(4000, () => {
  console.log('大吉大利')
})
