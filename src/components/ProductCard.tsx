import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export type Product = {
  id: string
  name: string
  price: number
  description?: string
  image?: string
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all bg-white flex flex-col">
      {/* 點圖片與標題可以進入詳情頁 */}
      <Link to={`/products/${product.id}`} className="block">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>

      {/* 價格與加入購物車按鈕 */}
      <div className="flex items-center justify-between px-4 pb-4 mt-auto">
        <span className="text-base font-bold">${product.price}</span>
        <Button size="sm" onClick={() => onAddToCart?.(product)}>
          加入購物車
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
