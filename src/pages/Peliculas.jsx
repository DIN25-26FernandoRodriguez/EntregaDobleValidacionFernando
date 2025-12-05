import peliculas from "../data/peliculas"
import Card from "../components/Card.jsx"
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import { useMemo } from "react";


function Pelicula() {
  const [searchTerm, setSearchTerm] = useState(""); // Declaro el estádo que se va a guardar

  const filteredPeliculas = useMemo(() => {
    if (!searchTerm) {
      return peliculas;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return peliculas.filter((pelicula) =>
      // Filtra por el nombre de la película
      pelicula.nombre.toLowerCase().includes(lowerCaseSearchTerm)
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
        placeholder="Buscar películas por nombre.." />

      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">Películas Destacadas</h1>
      </div>

      <div className="w-full mx-auto px-4 flex flex-wrap gap-6 justify-center">
        {/* {peliculas.map((pelicula) => (
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
        ))} */}
        {filteredPeliculas.length > 0 ? (
          filteredPeliculas.map((pelicula) => (
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
          ))
        ) : (
        // Mensaje si no hay resultados
        <p className="col-span-full text-center text-gray-500 p-4"> No se encontraron películas con el término `{searchTerm}`. </p>
        )}
      </div>
    </>
  )
}
export default Pelicula