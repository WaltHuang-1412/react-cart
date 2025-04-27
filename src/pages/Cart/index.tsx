import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Separator } from '@/components/ui/Separator'
import { useNavigate } from 'react-router-dom'

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart()
  const navigate = useNavigate()

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 購物車</h1>

      {items.length === 0 ? (
        <p className="text-muted-foreground text-center py-16">
          你的購物車是空的。
        </p>
      ) : (
        <div className="space-y-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm"
            >
              {/* ✅ 圖片區 */}
              <div className="w-full flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </div>

              {/* ✅ 商品資訊區 */}
              <div className="space-y-1 text-center">
                <h2 className="text-lg font-semibold break-words">
                  {item.name}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2 break-words">
                  {item.description}
                </p>
                <p className="text-primary font-bold">${item.price}</p>
              </div>

              {/* ✅ 數量操作區 */}
              <div className="flex justify-center items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <Input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    updateQuantity(item.id, Math.max(1, Number(e.target.value)))
                  }
                  className="w-16 text-center"
                />
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeItem(item.id)}
                >
                  移除
                </Button>
              </div>
            </div>
          ))}

          {/* 分隔線 */}
          <Separator />

          {/* 總金額 */}
          <div className="flex justify-between items-center text-lg font-bold">
            <span>總金額</span>
            <span>${total}</span>
          </div>

          {/* 🛒 前往結帳按鈕 */}
          <Button className="w-full mt-6" onClick={() => navigate('/checkout')}>
            前往結帳
          </Button>
        </div>
      )}
    </div>
  )
}
