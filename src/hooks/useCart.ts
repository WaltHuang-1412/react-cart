import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { addItem, removeItem, updateQuantity } from '@/store/cartSlice'

export function useCart() {
  const dispatch: AppDispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  const getQuantity = (id: string) => {
    return items.find((item) => item.id === id)?.quantity ?? 0
  }

  return {
    items,
    total,
    totalQuantity,
    getQuantity,
    addItem: (item: Parameters<typeof addItem>[0]) => dispatch(addItem(item)),
    removeItem: (id: string) => dispatch(removeItem(id)),
    updateQuantity: (id: string, quantity: number) =>
      dispatch(updateQuantity({ id, quantity })),
  }
}
