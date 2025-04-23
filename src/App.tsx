import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppProvider'
import { ThemeProvider } from './components/ThemeProvider'
import Navigation from './components/Navigation'
import Home from './pages/Home/index'
import Cart from './pages/Cart/index'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </AppProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
