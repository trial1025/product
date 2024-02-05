import { Schema, model } from 'mongoose'

// 定義資料庫的資料結構包含那些欄位
const schema = new Schema({
  // 欄位名稱
  account: {
    // 資料型態
    type: String,
    // 設定未必填欄位
    required: [true, '缺少 account 欄位'],
    // 文字長度
    minLength: [4, 'account 必須4個字以上'],
    maxLength: [20, 'account 必須20個字以下'],
    // 欄位資料不可重複
    unique: true,
    // Regex
    match: [/^[A-Za-z1-9]+$/, 'account 只能是英文或數字'],
    // 自動去除前後空白
    trim: true
  }

})

// 將結構轉換成可操作的model物件匯出
// 設定資料ccollection名稱為user
export default model('user', schema)
