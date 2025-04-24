import React from 'react'
import { useProduct } from '../hooks/useProduct'
import { Search, X } from 'lucide-react'

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useProduct()

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative flex items-center bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:border-blue-100 transition-colors">
          <div className="flex-1 flex items-center px-4 py-3">
            <Search className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜尋產品名稱或描述..."
              className="flex-1 ml-3 bg-transparent border-none focus:outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 py-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
} 