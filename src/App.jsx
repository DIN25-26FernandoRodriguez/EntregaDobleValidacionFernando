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


          {/* Mostrar los actores en tarjetas */}

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

          {/* Mostrar las películas en tarjetas */}

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {peliculas.map((pelicula) => (
              <Card
                key={pelicula.id}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}
              >
                <p><strong>Director:</strong> {pelicula.director}</p>
                <p><strong>Género:</strong> {pelicula.clasificacion}</p>
                <p><strong>Nota:</strong> {pelicula.nota}</p>
                <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
              </Card>
            ))}
          </div> */}
        </div>
      </Contenedor>
    </>
  )
}

export default App