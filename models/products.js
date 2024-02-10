import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: [true, '缺少商品名稱']
  },
  price: {
    type: Number,
    required: [true, '缺少商品價格'],
    min: [0, '商品價格不得小於0']
  },
  // 商品分類
  category: {
    type: String,
    enum: {
      // 限制只能有這些值
      values: ['反曲弓', '複合弓', '傳統弓'],
      // VALUE 自動替換為傳入的值
      message: '查無 {VALUE} 分類'
    }
  }
})

export default model('products', schema)
