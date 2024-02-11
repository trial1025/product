import { Schema, model, ObjectId } from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import UserRole from '../enums/UserRole'

const cartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: 'product',
    required: [true, '缺少商品欄位']
  }
})
const schema = new Schema({
  account: {
    type: String,
    required: [true, '缺少使用者帳號'],
    minlength: [4, '帳號長度不得小於4'],
    maxlength: [20, '帳號長度不得大於20'],
    unique: true,
    validator: {
      validator (value) {
        return validator.isAlphanumeric(value)
      },
      message: '使用者帳號只能包含英文或數字'
    }
  },
  email: {
    type: String,
    required: [true, '缺少使用者信箱'],
    unique: true,
    validator: {
      validator (value) {
        return validator.isEmail(value)
      },
      message: '信箱格式錯誤'
    }
  },
  password: {
    type: String,
    required: [true, '缺少使用者密碼']
  },
  token: {
    type: [String]
  },
  cart: {
    type: [cartSchema]
  },
  role: {
    type: Number,
    default: UserRole.USER
  }
})

export default model('user', schema)
