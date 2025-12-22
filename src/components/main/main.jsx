import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import './app/global.css'
import './app/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
