import { createContext, ReactNode } from 'react'

export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

interface ProductContextType {
  products: Product[]
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
)

// 模擬產品數據
const products: Product[] = [
  {
    id: '1',
    name: '高級耳機',
    price: 2999,
    description: '無線藍牙耳機，高音質音效，長效續航',
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Headphones',
  },
  {
    id: '2',
    name: '智慧手錶',
    price: 4999,
    description: '多功能智慧手錶，健康監測，運動追蹤',
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Smartwatch',
  },
  {
    id: '3',
    name: '無線充電板',
    price: 999,
    description: '快速無線充電，支援多種設備',
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Charger',
  },
  {
    id: '4',
    name: '藍牙喇叭',
    price: 1999,
    description: '便攜式藍牙喇叭，環繞音效',
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Speaker',
  },
]

export function ProductProvider({ children }: { children: ReactNode }) {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
