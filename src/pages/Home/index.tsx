import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import ProductCard from '@/components/ProductCard'
import { ProductContext, Product } from '@/contexts/ProductContext'
import { useContext, useCallback } from 'react'
import { useCart } from '@/hooks/useCart'

export default function Home() {
  const navigate = useNavigate()
  const productContext = useContext(ProductContext)
  const { addItem } = useCart()
  const products = productContext?.products || []

  // Get featured products (first 4 products)
  const featuredProducts = products.slice(0, 4)

  // Categories data
  const categories = [
    { id: 1, name: '電子產品', icon: '📱', description: '最新科技產品' },
    { id: 2, name: '服飾', icon: '👕', description: '時尚穿搭' },
    { id: 3, name: '家居', icon: '🏠', description: '打造理想生活' },
    { id: 4, name: '美妝', icon: '💄', description: '美麗保養' },
  ]

  const handleAddToCart = useCallback(
    (product: Product) => {
      addItem({ ...product, quantity: 1 }) // ✅ 類型一致
    },
    [addItem],
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-105 animate-subtle-zoom"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              探索<span className="text-yellow-300">無限</span>可能
            </h1>
            <p className="text-2xl mb-8 text-gray-100">
              發現最新、最熱門的商品，享受優質購物體驗
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => navigate('/products')}
                className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
              >
                立即購物
              </Button>
              <Button
                onClick={() => navigate('/products')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
              >
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section with Hover Effects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">商品分類</h2>
          <p className="text-gray-600 text-center mb-12">
            探索我們精心挑選的商品類別
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate('/products')}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section with Card Hover Effects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">熱門商品</h2>
          <p className="text-gray-600 text-center mb-12">精選最受歡迎的商品</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product: Product) => (
              <div
                key={product.id}
                className="transform hover:-translate-y-2 transition-all duration-300"
              >
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/products')}
              className="bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
            >
              查看更多商品
            </Button>
          </div>
        </div>
      </section>

      {/* Promo Section with Gradient and Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 animate-gradient"></div>
            <div className="relative p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-4">限時特惠</h2>
              <p className="text-2xl mb-8">全館商品 8 折起，立即搶購！</p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => navigate('/products')}
                  className="bg-white text-pink-500 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
                >
                  查看優惠
                </Button>
                <Button
                  onClick={() => navigate('/products')}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-500 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-3"
                >
                  了解更多
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
