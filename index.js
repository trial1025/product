import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import users from './user.js'

// 連線資料庫
mongoose.connect(process.env.DB_URL)

// 建立網頁伺服器
const app = express()

// 將傳入express 伺服器請求的body 解析成json格式
app.use(express.json())

// app.請求方式(路徑,處理fn
// 跟資料庫要資料都要時間 所以要用async
app.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const user = await users.create({
      account: req.body.account,
      email: req.body.email
    })

    res.status(200).json({
      success: true,
      message: '',
      result: user
    })
  } catch (error) {
  }
})

// 綁定4000 port
app.listen(4000, () => {
  console.log('大吉大利')
})
