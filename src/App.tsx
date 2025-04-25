import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppProvider'

import Home from './pages/Home/index'
import Cart from './pages/Cart/index'
import Products from './pages/Products'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
