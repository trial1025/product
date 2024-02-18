import { Schema, model } from 'mongoose'

const schema = new Schema({
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
    main: { // 大分類
      type: String,
      required: [true, '缺少商品分類'],
      enum: {
        values: ['衣服', '食品', '3C', '遊戲', '反曲弓', '複合弓', '傳統弓', '周邊商品', '其他'],
        message: '商品分類錯誤'
      }
    },
    sub: { // 子分類
      type: String,
      required: [true, '缺少商品子分類'],
      enum: {
        values: ['弓身', '弓臂', '安定桿', '瞄準器', '護具', '箭', '配件', '其他', '無'],
        message: '子分類錯誤'
      }
    }
  },
  condition: { // 商品狀況
    type: String,
    required: [true, '缺少商品狀況'],
    enum: {
      values: ['全新', '幾乎全新', '狀況良好', '輕度使用', '狀況尚可'],
      message: '商品狀況錯誤'
    }
  },
  quantity: { // 商品數量
    type: Number,
    required: [true, '缺少商品數量']
  },
  createdBy: { // 創建商品的使用者名稱
    type: String,
    required: [true, '缺少創建者名稱']
  },
  sell: {
    type: Boolean,
    required: [true, '缺少商品上架狀態']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('products', schema)
