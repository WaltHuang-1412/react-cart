import { useCart } from '@/hooks/useCart'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/Form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { checkoutOrder } from '@/api/checkout'

export default function CheckoutPage() {
  const { items, total } = useCart()

  const checkoutSchema = z.object({
    name: z.string().min(1, '姓名必填'),
    phone: z.string().min(1, '電話必填'),
    address: z.string().min(1, '地址必填'),
  })

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: '',
      phone: '',
      address: '',
    },
  })

  const mutation = useMutation({
    mutationFn: async (formData: z.infer<typeof checkoutSchema>) => {
      return checkoutOrder(formData, items, total)
    },
    onSuccess: () => {
      toast.success('訂單送出成功！')
    },
    onError: (error: any) => {
      toast.error(error.message || '訂單送出失敗')
    },
  })

  const onSubmit = (data: z.infer<typeof checkoutSchema>) => {
    mutation.mutate(data)
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-6">結帳 Checkout</h1>

      {/* 🧾 表單區 */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>姓名</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="請輸入姓名"
                    disabled={mutation.isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>電話</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="請輸入電話"
                    disabled={mutation.isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>地址</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="請輸入收件地址"
                    disabled={mutation.isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? '送出中...' : '提交訂單'}
          </Button>
        </form>
      </Form>

      {/* 🛒 購物車清單 */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">購物車明細</h2>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      {/* 💵 總金額 */}
      <div className="text-right font-bold text-lg">總金額：${total}</div>
    </div>
  )
}
