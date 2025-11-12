import Contenedor from "./components/Contenedor.jsx"
import peliculas from "./data/peliculas.js"
import Card from "./components/Card.jsx"

function App() {
  return (
    <>
      <h1 className="contenedor__h1">Mis Intérpretes</h1>
      <h2 className="titulo2">Listado de intérpretes disponibles:</h2>
      <Contenedor>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {peliculas.map((pelicula) => 
              pelicula.actores.map((actor, index) => 
                <Card
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen} >
                  {actor.biografia}
                </Card>
              ))}
          </div>
        </div>
      </Contenedor>
    </>
  )
}

export default App