import { createContext, ReactNode, useMemo, useReducer } from 'react'
import productsData from '../data/products.json'

export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

interface ProductState {
  searchTerm: string
  currentPage: number
}

interface ProductContextType extends ProductState {
  products: Product[]
  filteredProducts: Product[]
  totalPages: number
  currentProducts: Product[]
  setSearchTerm: (term: string) => void
  setCurrentPage: (page: number) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
)

const ITEMS_PER_PAGE = 10

function productReducer(
  state: ProductState,
  action: {
    type: 'SET_SEARCH_TERM' | 'SET_CURRENT_PAGE'
    payload: string | number
  },
): ProductState {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload as string, currentPage: 1 }
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload as number }
    default:
      return state
  }
}

export function ProductProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, {
    searchTerm: '',
    currentPage: 1,
  })

  const filteredProducts = useMemo(() => {
    return productsData.products.filter(
      (product) =>
        product.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase()),
    )
  }, [state.searchTerm])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)

  const currentProducts = useMemo(() => {
    const startIndex = (state.currentPage - 1) * ITEMS_PER_PAGE
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredProducts, state.currentPage])

  return (
    <ProductContext.Provider
      value={{
        products: productsData.products,
        searchTerm: state.searchTerm,
        setSearchTerm: (term: string) =>
          dispatch({ type: 'SET_SEARCH_TERM', payload: term }),
        currentPage: state.currentPage,
        setCurrentPage: (page: number) =>
          dispatch({ type: 'SET_CURRENT_PAGE', payload: page }),
        filteredProducts,
        totalPages,
        currentProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
