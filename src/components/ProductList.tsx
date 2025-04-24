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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12">
        <SearchBar />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">{product.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">${product.price.toLocaleString()}</span>
                <button 
                  onClick={() => addItem({ ...product, quantity: 1 })}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm hover:shadow"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>加入購物車</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* 分頁控制 */}
      <div className="mt-12 flex justify-center items-center gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>上一頁</span>
        </button>
        
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                currentPage === page
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow'
          }`}
        >
          <span>下一頁</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
} 