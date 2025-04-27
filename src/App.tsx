// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexts/AppProvider'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Products from './pages/Products'
import ProductDetailPage from './pages/ProductDetail'
import CheckoutPage from './pages/Checkout'

import { MainLayout } from './layouts/MainLayout'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/products"
            element={
              <MainLayout>
                <Products />
              </MainLayout>
            }
          />
          <Route
            path="/cart"
            element={
              <MainLayout>
                <Cart />
              </MainLayout>
            }
          />
          <Route
            path="/products/:id"
            element={
              <MainLayout>
                <ProductDetailPage />
              </MainLayout>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
