import{ useParams } from 'react-router-dom';
import peliculas from "../data/peliculas"

function DetalleInterprete() {
  const { id } = useParams();
  const index = parseInt(id);


  const todosLosActores = peliculas.flatMap(p => p.actores);
  const interprete = todosLosActores[index]

  
  const peliculasDelActor = peliculas.filter(p =>p.actores.includes(interprete));

  return (
    <div>

        <button>
          <a href="/interpretes" className="text-black-500 hover:underline mb-4 inline-bloc bg-[var(--colorNavBar)] p-2 rounded-2xl ">Volver a películas</a>
        </button>

      <h1 className="text-4xl font-bold text-center mt-10 mb-6">Detalles del Intérprete</h1>

      <main className="w-full mx-auto px-4 text-center">

        

        <img
          src={interprete.imagen}
          alt={interprete.nombre}
          className="w-80 h-90 object-cover rounded-2xl mb-6 mx-auto" 
        />

        <h1 className="text-4xl font-bold mb-6">{interprete.nombre}</h1>


        <section className="space-y-3 text-lg text-center">
          <p><strong>Fecha de nacimiento:</strong> {interprete.fechaNacimiento}</p>

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-2">Biografía</h2>
            <p>{interprete.biografia}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-6 mb-2">Películas</h2>
            <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
            {peliculasDelActor.map(p => (
                <div key={p.id} className="text-center">
                  <img
                    src={p.cartelera}
                    alt={p.nombre}
                    className="w-40 h-60 object-cover rounded-xl mx-auto mb-2"
                  />
                  <p className="font-semibold">{p.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
 
}

export default DetalleInterprete;