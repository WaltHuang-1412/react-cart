// src/contexts/CartContext.tsx
import { createContext, useState, ReactNode } from 'react'

// 型別定義
export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
  description?: string
}

export type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getTotal: () => number
  total: number
}

// 建立 Context
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | undefined>(undefined)

// 🎁 Provider 組件
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id)
      if (existing) {
        return prev.map((i) =>
          i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i,
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const getTotal = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const total = getTotal()

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, getTotal, total }}>
      {children}
    </CartContext.Provider>
  )
}
