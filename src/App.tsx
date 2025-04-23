import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductContext'
import { ThemeProvider } from './components/ThemeProvider'
import Navigation from './components/Navigation'
import Home from './pages/Home/index'
import Cart from './pages/Cart/index'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ProductProvider>
          <CartProvider>
            <div className="min-h-screen bg-background text-foreground">
              <Navigation />
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>
            </div>
          </CartProvider>
        </ProductProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
