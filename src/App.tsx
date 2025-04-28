// src/App.tsx
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './contexts/AppProvider'
import { Router } from './Router'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
