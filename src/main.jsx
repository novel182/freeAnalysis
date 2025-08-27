import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Visuals from './display/Visuals'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Visuals />
  </StrictMode>,
)
