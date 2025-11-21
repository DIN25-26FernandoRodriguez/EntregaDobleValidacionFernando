import peliculas from "../data/peliculas"
import Card from "../components/Card.jsx"

function Pelicula() {
    return (
        <>
<button>
          <a href="/inicio" className="text-black-500 hover:underline mb-4 inline-bloc bg-[var(--colorNavBar)] p-2 rounded-2xl ">Volver al inicio</a>
        </button>

        <div>
          <h1 className="text-4xl font-bold text-center mt-10 mb-6">Películas Destacadas</h1>
        </div>
        
            <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
            {peliculas.map((pelicula) => (
              <Card
                key={pelicula.id}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}
                
                to={`/peliculas/${pelicula.id}`}> 

                <p><strong>Director:</strong> {pelicula.director}</p>
                <p><strong>Género:</strong> {pelicula.clasificacion}</p>
                <p><strong>Nota:</strong> {pelicula.nota}</p>
                <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>
              </Card>
            ))}
            </div>
        </>
    )
}
export default Pelicula