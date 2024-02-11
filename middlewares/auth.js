import passport from 'passport'
import { StatusCodes } from 'http-status-codes'

// 這個 middleware 會檢查是否有登入
// 如果沒有登入，會回傳 401
// 如果有登入，會把 user 資訊放到 req.user
// 這樣之後的 middleware 或 controller 就可以直接使用 req.user
export const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (error, user, info) => {
    if (!user || error) {
      if (info.message === 'Missing credentials') {
        res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: '欄位錯誤'
        })
        return
      } else if (info.message === '未知錯誤') {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          success: false,
          message: '未知錯誤'
        })
        return
      } else {
        res.status(StatusCodes.UNAUTHORIZED).json({
          success: false,
          message: info.message
        })
        return
      }
    }
    req.user = user
    next()
  })(req, res, next)
}
