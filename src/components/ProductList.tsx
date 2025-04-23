import React from 'react'
import { useCart } from '../hooks/useCart'
import { useProduct } from '../hooks/useProduct'
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import SearchBar from './SearchBar'

export default function ProductList() {
  const { addItem } = useCart()
  const { 
    currentProducts, 
    currentPage, 
    setCurrentPage, 
    totalPages 
  } = useProduct()

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col group"
          >
            <div className="aspect-square rounded-lg mb-4 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-blue-600">${product.price.toLocaleString()}</span>
              <button 
                onClick={() => addItem({ ...product, quantity: 1 })}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>加入購物車</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* 分頁控制 */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>上一頁</span>
        </button>
        
        <span className="text-gray-600">
          第 {currentPage} 頁，共 {totalPages} 頁
        </span>
        
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <span>下一頁</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
} 