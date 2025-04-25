import { useContext } from 'react'
import { ProductContext } from '@/contexts/ProductContext'
import { ProductCard } from '@/components/ProductCard'
import { Pagination } from '@/components/Pagination'

export default function ProductsPage() {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('ProductsPage 必須在 ProductProvider 中使用')
  }

  const {
    currentProducts,
    currentPage,
    totalPages,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
  } = context

  return (
    <div className="container mx-auto px-4 py-6">
      {/* 搜尋欄 */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1) // 搜尋時回到第1頁
          }}
          placeholder="搜尋商品..."
          className="border px-4 py-2 rounded-md w-full"
        />
      </div>

      {/* 商品列表 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(p) => console.log('加入購物車', p)}
          />
        ))}
      </div>

      {/* 分頁 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}
