// src/Router.tsx
import { useRoutes } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetailPage from './pages/ProductDetail'
import Cart from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import ThankYouPage from './pages/ThankYou'
import { MainLayout } from './layouts/MainLayout'

// 設定所有 route 列表
const routes = [
  { path: '/', element: <Home />, layout: MainLayout },
  { path: '/products', element: <Products />, layout: MainLayout },
  { path: '/products/:id', element: <ProductDetailPage />, layout: MainLayout },
  { path: '/cart', element: <Cart />, layout: MainLayout },
  { path: '/checkout', element: <CheckoutPage /> }, // 不套 MainLayout
  { path: '/thank-you', element: <ThankYouPage /> }, // 不套 MainLayout
]

export function Router() {
  const elements = routes.map(({ path, element, layout }) => {
    const wrapped = layout ? layout({ children: element }) : element
    return { path, element: wrapped }
  })

  return useRoutes(elements)
}
