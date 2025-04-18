import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { ShoppingCart } from 'lucide-react'

export default function Navigation() {
  const { items } = useCart()
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            React 購物車
          </Link>
          <Link 
            to="/cart" 
            className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium">購物車</span>
            {itemCount > 0 && (
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
} 