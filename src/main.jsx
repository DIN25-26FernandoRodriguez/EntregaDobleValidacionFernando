import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/index.css"
import App from './App.jsx'
import Contenedor from './features/Contenedor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
    >
      Saltar al contenido principal
    </a>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    </>
  </StrictMode>,
)
