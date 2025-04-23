import React, { createContext, ReactNode, useState, useMemo } from 'react'
import productsData from '../data/products.json'

export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

interface ProductContextType {
  products: Product[]
  searchTerm: string
  setSearchTerm: (term: string) => void
  filteredProducts: Product[]
  currentPage: number
  setCurrentPage: (page: number) => void
  totalPages: number
  currentProducts: Product[]
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
)

const ITEMS_PER_PAGE = 10

export function ProductProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProducts = useMemo(() => 
    productsData.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  , [searchTerm])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredProducts, currentPage])

  return (
    <ProductContext.Provider value={{ 
      products: productsData.products, 
      searchTerm, 
      setSearchTerm,
      filteredProducts,
      currentPage,
      setCurrentPage,
      totalPages,
      currentProducts
    }}>
      {children}
    </ProductContext.Provider>
  )
}
