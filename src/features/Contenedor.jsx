import Interprete from "../pages/Interprete"
import Card from "./Card"



function Contenedor({ children }) {

  return (
    <>
      <main
        id="main-content"
        role="main"
        tabIndex="-1"
        className="min-h-screen bg-linear-to-br flex flex-col items-center justify-center p-8">
        
        <section aria-labelledby="main-section-title" className="w-full max-w7xl text-center">
          <h1 id="main-section-title">Intérpretes de películas destacadas</h1>
          {children}
        </section>
      </main>
    </>
  )
}

export default Contenedor
