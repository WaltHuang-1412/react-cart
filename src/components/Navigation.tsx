import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { ShoppingCart } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export default function Navigation() {
  const { items } = useCart()
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
            React 購物車
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
              to="/cart" 
              className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full hover:bg-secondary/80 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-secondary-foreground" />
              <span className="text-secondary-foreground font-medium">購物車</span>
              {itemCount > 0 && (
                <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 