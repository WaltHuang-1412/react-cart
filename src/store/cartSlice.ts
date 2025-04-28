import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
  description?: string
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find((item) => item.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload.id)
        } else {
          item.quantity = action.payload.quantity
        }
      }
    },
    // ✅ 加這段：清空購物車
    clearCart: (state) => {
      state.items = []
    },
  },
})

// ✅ 別忘了 export 出 clearCart
export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
