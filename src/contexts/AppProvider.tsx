import { ReactNode } from 'react'
import { CartProvider } from './CartContext'
import { ProductProvider } from './ProductContext'

interface AppProviderProps {
  children: ReactNode
}

// 這裡列出所有 Provider
const providers = [ProductProvider, CartProvider]

export function AppProvider({ children }: AppProviderProps) {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>
  }, children)
}
