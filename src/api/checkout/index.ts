import type { CheckoutFormValues, CheckoutItem } from './type'

export const checkoutOrder = async (
  formData: CheckoutFormValues,
  items: CheckoutItem[],
  total: number,
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: '模擬成功送出訂單',
        formData,
        items,
        total,
      })
    }, 1000) // 模擬延遲 1 秒
  })
}
