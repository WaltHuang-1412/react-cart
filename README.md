# 🛒 React Cart — 前端技術練習專案

本專案為練習 React 18 現代開發流程的購物車系統，  
專注於技術結構、狀態管理、表單驗證、模組化開發。

---

## 🚀 技術棧 Tech Stack

- Frontend:
  - React 18 + TypeScript
  - Vite 6
  - React Router 7
  - React Hook Form + zod
  - @tanstack/react-query
  - Tailwind CSS 4 + shadcn/ui
  - sonner (toast 通知)
  - axios (API 請求模組化)
- 狀態管理：
  - Context API（Cart、Product 狀態）
  - Redux Toolkit（準備擴展中）

---

## 🛠️ 專案結構 Project Structure

```
src/
├── api/            # API 設定與模組
├── components/     # 通用元件
├── contexts/       # Context API 狀態管理
├── hooks/          # 客製化 Hook
├── layouts/        # 動態 Layout 系統
├── pages/          # 各個頁面模組
├── router/         # 動態路由管理
├── types/          # 型別定義
└── App.tsx         # 專案進入點
```

---

## 📚 核心功能 Core Features

- **商品列表頁**（Products）
  - 分頁顯示
  - 支援關鍵字搜尋（帶 debounce）
- **商品詳情頁**（Product Detail）
  - 顯示商品詳細資訊
- **購物車功能**（Cart）
  - 加入購物車、變更數量、刪除商品
  - 自動計算總金額
- **結帳流程**（Checkout）
  - 表單輸入（姓名、電話、地址）
  - 表單驗證（zod 驗證結合 react-hook-form）
  - 成功後清空購物車並導向 Thank You Page
- **動態 Layout 系統**
  - Products、Cart 等頁面套用 MainLayout（Header + Footer）
  - Checkout、ThankYou 等頁面不套 Layout
- **Toast 提示系統**
  - 成功/失敗提示整合 sonner
- **API 請求結構化**
  - axios instance
  - checkout API 送單流程模擬
- **模組化組件**
  - 通用元件（Button, Input, Pagination, FormControl）

---

## 📈 目前進度 Progress

| 進度 | 說明 |
|:---|:---|
| ✅ 初始化 React + Tailwind + shadcn 專案架構 |
| ✅ 完成購物車基本功能（增刪改查） |
| ✅ 完成 Checkout 流程（含表單驗證 + API 模擬送出） |
| ✅ 整合動態 Layout 系統（自動根據頁面選擇是否套用 Layout） |
| ✅ 整合 react-query 處理訂單送出流程 |
| ✅ 整合 toast 成功/失敗提示 |
| 🛠️ 商品詳情頁細節豐富化（進行中） |
| 🛠️ RWD 響應式細節優化（進行中） |
| 🔜 模擬 API（json-server or MSW）串接 |
| 🔜 Redux Toolkit 整合購物車進階功能 |

---

## 📢 備註 Notes

- 本專案資料為前端假資料，部分功能使用 setTimeout 模擬 API。
- 本專案以「專注 React 技術練習」為目標，非商業正式版。

---