import Contenedor from "./features/Contenedor.jsx"
import peliculas from "./data/peliculas.js"
import Card from "./features/Card.jsx"
import Interprete from "./pages/Interprete.jsx"
import Pelicula from "./pages/Peliculas.jsx"

function App() {
  return (
    <>
      <h1 className="contenedor__h1">Mis Intérpretes</h1>
      <h2 className="titulo2">Listado de intérpretes disponibles:</h2>
      <Contenedor>
        {/* Centrar todas las tarjetas en el centro */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

            {/* MOSTRAR INTÉRPETES */}
            {/*  */}

            {/* MOSTRAR PELÍCULAS */}
          <Interprete>
            
          </Interprete>

          </div>
        </div>
      </Contenedor>
    </>
  )
}

export default App
