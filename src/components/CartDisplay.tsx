import React from 'react'
import { useCart } from '../hooks/useCart'
import { Trash2, Minus, Plus } from 'lucide-react'

export default function CartDisplay() {
  const { items, total, removeItem, updateQuantity } = useCart()

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">購物車</h2>
      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">購物車是空的</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(item => (
              <div 
                key={item.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-blue-600 font-semibold">${item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white rounded-lg border">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 rounded-l-lg"
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="px-4 py-2 border-x">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 rounded-r-lg"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-600">總計</span>
              <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
} 