export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-pxtorem': {
      rootValue: 16, // 根據設計稿的基準值設置，這裡假設設計稿是 375px 寬度
      propList: ['*'], // 需要轉換的屬性，這裡表示全部都進行轉換
      selectorBlackList: [], // 不轉換px的選擇器
      replace: true, // 轉換後是否刪除原有的px單位
      mediaQuery: false, // 是否在媒體查詢中轉換px
      minPixelValue: 1 // 設置要替換的最小像素值
    },
    'autoprefixer': {}
  }
} 