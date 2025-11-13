import peliculas from "../data/peliculas"
import Card from "../features/Card"

function Interprete() {

return (
    <>
    
    {peliculas.map((pelicula) => //Recorrer películas
              pelicula.actores.map((actor, index) => //Recorrer cada actor
                <Card
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen} >
                  {actor.biografia}
                </Card>
              ))}
    </>
)

}

export default Interprete

