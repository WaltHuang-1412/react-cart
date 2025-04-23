import { ReactNode } from 'react'
import { CartProvider } from './CartContext'
import { ProductProvider } from './ProductContext'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  )
}
