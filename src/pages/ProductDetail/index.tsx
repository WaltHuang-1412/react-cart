import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '@/contexts/ProductContext'
import { Button } from '@/components/ui/button'

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('ProductDetailPage 必須在 ProductProvider 中使用')
  }

  const product = context.products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl">找不到商品</p>
        <Button className="mt-4" onClick={() => navigate('/products')}>
          返回商品列表
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-md mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-500 mb-4">{product.description}</p>
      <p className="text-lg font-semibold mb-6">${product.price}</p>

      <Button onClick={() => console.log('加入購物車', product)}>
        加入購物車
      </Button>
    </div>
  )
}
