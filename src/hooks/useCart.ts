import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import type { CartContextType } from '../context/CartContext'

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}