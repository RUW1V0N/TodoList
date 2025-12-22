import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app'
import './global.css'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
