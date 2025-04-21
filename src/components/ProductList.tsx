import React from 'react'
import { useCart } from '../hooks/useCart'
import { ShoppingCart } from 'lucide-react'

// 模擬產品數據
const products = [
  { 
    id: '1', 
    name: '高級耳機', 
    price: 2999, 
    description: '無線藍牙耳機，高音質音效，長效續航',
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Headphones'
  },
  { 
    id: '2', 
    name: '智慧手錶', 
    price: 4999, 
    description: '多功能智慧手錶，健康監測，運動追蹤',
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Smartwatch'
  },
  { 
    id: '3', 
    name: '無線充電板', 
    price: 999, 
    description: '快速無線充電，支援多種設備',
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Charger'
  },
  { 
    id: '4', 
    name: '藍牙喇叭', 
    price: 1999, 
    description: '便攜式藍牙喇叭，環繞音效',
    image: 'https://placehold.co/400x400/2563eb/ffffff?text=Speaker'
  },
]

export default function ProductList() {
  const { addItem } = useCart()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
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
  )
} 