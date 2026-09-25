import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Login from './components/Login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>

        <Route path="/" element={<Login/>} />

        <Route path="/app" element={<App />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
