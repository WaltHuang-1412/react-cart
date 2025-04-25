import { useContext, useEffect } from 'react'
import { ProductContext } from '@/contexts/ProductContext'
import { ProductCard } from '@/components/ProductCard'
import { Pagination } from '@/components/Pagination'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { useDebouncedValue } from '@/hooks/useDebouncedValue' // ✅ 加這行

const SearchSchema = z.object({
  search: z.string().optional(),
})

type SearchFormValues = z.infer<typeof SearchSchema>

export default function Products() {
  const context = useContext(ProductContext)

  if (!context) throw new Error('Products 必須在 ProductProvider 裡使用')

  const {
    currentProducts,
    searchTerm,
    setSearchTerm,
    currentPage,
    totalPages,
    setCurrentPage,
  } = context

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: searchTerm,
    },
  })

  // ✅ 取得實際輸入值
  const watchedSearch = form.watch('search') ?? ''

  // ✅ 防抖處理輸入值
  const debouncedSearch = useDebouncedValue(watchedSearch, 300)

  // ✅ 用 debounce 過的值更新 Context
  useEffect(() => {
    setSearchTerm(debouncedSearch)
    setCurrentPage(1)
  }, [debouncedSearch, setSearchTerm, setCurrentPage])

  return (
    <div className="container mx-auto px-4 py-6">
      {/* 🔍 RHF 搜尋欄 */}
      <Form {...form}>
        <form className="mb-6 space-y-2">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel htmlFor="search" className="w-1/4">
                  搜尋商品
                </FormLabel>
                <FormControl className="w-3/4">
                  <Input
                    id="search"
                    placeholder="請輸入商品名稱..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      {/* 🛍 商品列表 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(p) => console.log('加入購物車', p)}
          />
        ))}
      </div>

      {/* ⬅️ 分頁器 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
