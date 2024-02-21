import { Schema, model } from 'mongoose'

const schema = new Schema({
  account: {
    type: String,
    required: [true, '缺少使用者帳號']
  },
  name: {
    type: String,
    required: [true, '缺少商品名稱']
  },
  price: {
    type: Number,
    required: [true, '缺少商品價格']
  },
  image: {
    type: String,
    required: [true, '缺少商品圖片']
  },
  description: {
    type: String,
    required: [true, '缺少商品說明']
  },
  category: {
    main: {
      type: String,
      required: [true, '缺少商品分類'],
      enum: {
        values: ['反曲弓', '複合弓', '傳統弓', '周邊商品', '其他'],
        message: '商品分類錯誤'
      }
    },
    sub: {
      type: String,
      enum: {
        values: ['弓身', '弓臂', '瞄準器', '安定桿', '箭', '護具', '配件', '其他'],
        message: '商品分類錯誤'
      }
    }
  },
  condition: {
    type: String,
    required: true,
    enum: ['全新', '幾乎全新', '狀況良好', '輕度使用', '狀況尚可', '狀況差']
  },
  sell: {
    type: Boolean,
    required: [true, '缺少商品上架狀態']
  }
},
{
  timestamps: true,
  versionKey: false
})

export default model('products', schema)
