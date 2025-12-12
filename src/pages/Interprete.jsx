import peliculas from "../data/peliculas"
import Card from "../components/Card.jsx"
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import { useMemo } from "react";

function Interprete() {

  const todosLosActores = peliculas.flatMap((pelicula) =>
    pelicula.actores.map((actor, idInterprete) => ({
      ...actor,
      idPelicula: pelicula.id, 
      idInterprete: idInterprete, 
      esNota10: pelicula.nota === 10, 
    }))
  );

  const [searchTerm, setSearchTerm] = useState(""); // Declaro el estádo que se va a guardar

  const filteredActores = useMemo(() => {
    if (!searchTerm) {
      return todosLosActores;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return todosLosActores.filter((actor) =>
      // Filtra por el nombre de la película
      actor.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <>

      <button>
        <a href="/inicio" className="text-black-500 hover:underline mb-4 inline-bloc bg-[var(--colorNavBar)] p-2 rounded-2xl ">Volver al inicio</a>
      </button>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar actores por nombre.." />

      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">Intérpretes Destacados</h1>
      </div>

      <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
  
        {filteredActores.length > 0 ? (
          filteredActores.map((actor, index) => (
            <Card
              key={index}
              nombre={actor.nombre}
              foto={actor.imagen}
              to={`/interpretes/${index}`} >
              {actor.biografia}
            </Card>
          ))
        ) : (
          // Mensaje si no hay resultados
          <p className="col-span-full text-center text-gray-500 p-4"> No se encontraron actores con el término `{searchTerm}`. </p>
        )}
      </div>
    </>
  )

}

export default Interprete