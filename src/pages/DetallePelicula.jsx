import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import peliculas from "../data/peliculas"

function DetallePelicula() {
  const { id } = useParams();
  const pelicula = peliculas.find(p => p.id === parseInt(id));

  return (
    <div>

        <button>
          <a href="/peliculas" className="text-black-500 hover:underline mb-4 inline-bloc bg-[var(--colorNavBar)] p-2 rounded-2xl ">Volver a películas</a>
        </button>
       

      <h1 className="text-4xl font-bold text-center mt-10 mb-6">Detalles de la Película</h1>


      <main className="w-full mx-auto px-4 text-center">


        
        <h1 className="text-4xl font-bold mb-6">{pelicula.nombre}</h1>

        
        <img
          src={pelicula.cartelera}
          alt={pelicula.nombre}
          className="w-80 h-90 object-cover rounded-2xl mb-6 mx-auto" //mx-auto para centrar imagen
        />


        <section className="space-y-3 text-lg text-center">
          <p><strong>Director:</strong> {pelicula.director}</p>
          <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
          <p><strong>Nota:</strong> {pelicula.nota}</p>
          <p><strong>Recaudación:</strong> {pelicula.recaudacion}</p>

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-2">Resumen</h2>
            <p>{pelicula.resumen}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-2">Actores</h2>
            <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
            {pelicula.actores.map(actor => (
              <Card
                key={actor.id}
                nombre={actor.nombre}
                foto={actor.imagen}>
                {actor.biografia}
              </Card>

            ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );


}

export default DetallePelicula;