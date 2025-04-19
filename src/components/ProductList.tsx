import React from 'react'
import { useCart } from '../hooks/useCart'
import { ShoppingCart } from 'lucide-react'

// 模擬產品數據
const products = [
  { id: '1', name: '產品 1', price: 10, description: '這是產品1的描述' },
  { id: '2', name: '產品 2', price: 20, description: '這是產品2的描述' },
  { id: '3', name: '產品 3', price: 30, description: '這是產品3的描述' },
  { id: '4', name: '產品 4', price: 40, description: '這是產品4的描述' },
]

export default function ProductList() {
  const { addItem } = useCart()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div 
          key={product.id} 
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
        >
          <div className="aspect-square bg-gray-100 rounded-lg mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-2">{product.description}</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">${product.price}</span>
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
  )
} 