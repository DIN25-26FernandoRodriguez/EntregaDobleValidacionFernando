import peliculas from "../data/peliculas.js"
import Card from "../features/Card"

function Peliculas() {

return (
    <>
    
    {peliculas.map((pelicula) => //Recorrer películas
                <Card
                  key={pelicula.id}
                  nombre={pelicula.nombre}
                  foto={pelicula.cartelera} >
                  
                  <p><strong>Director: </strong>{pelicula.director}</p>
                  <p><strong>Clasificación: </strong>{pelicula.clasificacion}</p>
                  <p><strong>Nota: </strong>{pelicula.nota}</p>
                  <p><strong>Recaudación: </strong>{pelicula.recaudacion}</p>

                </Card>
              )}
    </>
)

}

export default Peliculas

