import peliculas from "../data/peliculas"
import Card from "../components/Card.jsx"

function Interprete() {

const todosLosActores = peliculas.flatMap(p => p.actores);

  return (
    <>

<button>
          <a href="/inicio" className="text-black-500 hover:underline mb-4 inline-bloc bg-[var(--colorNavBar)] p-2 rounded-2xl ">Volver al inicio</a>
        </button>

      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">Intérpretes Destacados</h1>
      </div>

      <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
      {
        todosLosActores.map((actor, index) =>
          <Card
            key={index}
            nombre={actor.nombre}
            foto={actor.imagen}
            to={`/interpretes/${index}`} >
            {actor.biografia}
          </Card>
        )}
        </div>
    </>
  )

}

export default Interprete