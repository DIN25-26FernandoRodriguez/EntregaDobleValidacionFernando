import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/Users/fernando/Desktop/Estudios/2ºDAM/Diseño de interfaces/JavaScrypt Interfaces/Actividad_Evaluable_Peliculas/src/assets/styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
    >
      Saltar al contenido principal
    </a>
    <App/>
    </>
  </StrictMode>,
)
