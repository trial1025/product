import { Schema, model, Error, ObjectId } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const cartSchema = new Schema({
  p_id: {
    type: ObjectId,
    // id來源
    ref: 'products',
    required: [true, '缺少購物車商品ID']
  },
  // 商品數量
  quantity: {
    type: Number,
    min: [1, '購物車商品數量不能小於1'],
    required: [true, '缺少購物車商品數量']
  }
})
const schema = new Schema({
  email: {
    type: String,
    required: [true, '缺少使用者信箱'],
    unique: true,
    validate: {
      validator (value) {
        validator.isEmail(value)
      },
      message: '使用者信箱錯誤'
    }
  },
  password: {
    type: String,
    required: [true, '缺少使用者密碼']
  },
  cart: {
    type: [cartSchema]
  }
})

// 資料驗證完後進資料庫前
// 新增或使用.save()語法
// next 繼續執行保存進資料庫
schema.pre('save', function (next) {
  // this代表準備要被儲存的資料
  const user = this
  // 如果密碼有修改
  if (user.isModified('password')) {
    // 驗證密碼格式
    if (user.password.length >= 4 && user.password.length <= 20) {
      user.password = bcrypt.hashSync(user.password, 10)
    } else {
      const error = new Error.ValidationError(null)
      error.addError('password', new Error.ValidatorError({ message: '密碼長度錯誤' }))
      // 繼續下一步，拋出錯誤
      next(error)
      return
    }
  }
  // 繼續下一步
  next()
})

export default model('users', schema)
