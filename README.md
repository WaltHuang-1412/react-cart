# React 購物車專案

這是一個使用 React + TypeScript + Tailwind CSS 開發的購物車專案，用於學習和實踐 React 的核心概念。

## 專案功能

- 產品列表展示
- 購物車功能（新增、刪除、修改數量）
- 響應式設計
- 狀態管理

## 技術棧

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Context API
- Custom Hooks

## 學習重點

### 1. React Context 的使用
- 使用 Context API 管理購物車狀態
- 實現跨組件狀態共享
- 理解 Context 的適用場景

```typescript
// CartContext.tsx
export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  // ... 購物車邏輯
}
```

### 2. Custom Hooks
- 封裝購物車邏輯
- 提高代碼復用性
- 分離業務邏輯

```typescript
// useCart.ts
export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
```

### 3. TypeScript 類型定義
- 定義清晰的介面
- 提供類型安全
- 改善開發體驗

```typescript
type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
  description?: string
}
```

### 4. Tailwind CSS 樣式管理
- 使用 utility-first 的方式編寫樣式
- 響應式設計
- 組件樣式封裝

```typescript
// 產品卡片樣式
<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col group">
  // ... 內容
</div>
```

### 5. 組件設計
- 組件拆分原則
- 組件通信方式
- 組件復用策略

## 專案結構

```
src/
├── components/         # 可重用組件
│   ├── Navigation.tsx  # 導航欄
│   ├── ProductList.tsx # 產品列表
│   └── CartDisplay.tsx # 購物車顯示
├── context/           # Context 相關
│   └── CartContext.tsx # 購物車 Context
├── hooks/             # Custom Hooks
│   └── useCart.ts     # 購物車 Hook
├── pages/             # 頁面組件
│   ├── Home/          # 首頁
│   └── Cart/          # 購物車頁面
└── App.tsx            # 應用入口
```

## 學習心得

1. **狀態管理**
   - Context API 適合中小型應用的狀態管理
   - 合理使用 Context 可以避免 prop drilling
   - 需要注意 Context 的性能影響

2. **TypeScript 實踐**
   - 類型定義可以提前發現錯誤
   - 良好的類型定義可以作為文檔
   - 需要平衡類型定義的完整性和開發效率

3. **組件設計**
   - 組件應該具有單一職責
   - 合理使用 props 和 Context
   - 注意組件的可復用性

4. **樣式管理**
   - Tailwind CSS 提供了高效的開發體驗
   - 需要合理組織樣式代碼
   - 注意樣式的可維護性

## 待改進的地方

1. 添加更多功能
   - 用戶認證
   - 訂單管理
   - 產品詳情頁

2. 優化性能
   - 實現虛擬列表
   - 優化重渲染
   - 添加載入狀態

3. 改進用戶體驗
   - 添加動畫效果
   - 優化表單驗證
   - 添加錯誤處理

## 運行專案

```bash
# 安裝依賴
npm install

# 開發環境運行
npm run dev

# 構建生產版本
npm run build
```

## 參考資源

- [React 官方文檔](https://react.dev/)
- [TypeScript 文檔](https://www.typescriptlang.org/)
- [Tailwind CSS 文檔](https://tailwindcss.com/)
- [React Router 文檔](https://reactrouter.com/)
