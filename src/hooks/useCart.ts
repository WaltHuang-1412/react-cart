import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import type { CartContextType } from '../contexts/CartContext'

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}