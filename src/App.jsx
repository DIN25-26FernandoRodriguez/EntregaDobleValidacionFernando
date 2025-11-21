import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Contenedor from "./components/Contenedor.jsx"
import Interprete from "./pages/Interprete.jsx"
import Pelicula from "./pages/Peliculas.jsx"
import Inicio from "./pages/Inicio";
import Admin from "./pages/Admin";
import DetallePelicula from "./pages/DetallePelicula.jsx"
import DetalleInterprete from "./pages/DetalleInterprete.jsx"

function App() {
  return (
    <>

      <Navbar></Navbar>

      <Contenedor>
        <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/interpretes" element={<Interprete />} />
        <Route path="/interpretes/:id" element={<DetalleInterprete />} />
        <Route path="/peliculas" element={<Pelicula />} />
        <Route path="/peliculas/:id" element={<DetallePelicula />} />
        <Route path="/admin" element={<Admin />} />
        </Routes>
      </Contenedor>

    </>
  )
}

export default App
