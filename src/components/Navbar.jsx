import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (

    <header className="w-full bg-[var(--colorNavBar)] p-4 shadow-md">
    
    {/* Botón hamburguesa que sea invisible en pantallas medianas y grandes */}
    {/* */}
    <button onClick={() => setOpen(!open)} className="md:hidden text-2xl" aria-lablel="Menú hamburguesa" 
    aria-expanded={open} aria-controls="menu-movil">☰</button>


{/* bg-[var(--colorNavBar)] */}


{/* NavBar normal en pantallas medianas y grandes */}
    <nav className="hidden md:flex gap-8 text-lg flex-1 justify-center" aria-label="Barra de navegación">
      <Link to="/" className="hover:underline">Inicio</Link>
      <Link to="/peliculas" className="hover:underline">Películas</Link>
      <Link to="/interpretes" className="hover:underline">Intérpretes</Link>
      <Link to="/admin" className="hover:underline">Admin</Link>
    </nav>


    {/* Menú hamburguesa sólo visible para pantallas pequeñas*/}
    <nav id ="menu-movil" className={`absolute top-16 left-0 w-full bg-white flex flex-col p-4 gap-4 md:hidden 
      transition-all ${open ? "block" : "hidden"}`} aria-label="Menú para móvil">
                <NavLink to="/" className="hover:underline" onClick={() => setOpen(false)} >Inicio</NavLink>
                <NavLink to="/peliculas"  className="hover:underline" onClick={() => setOpen(false)}>Películas</NavLink>
                <NavLink to="/interpretes"  className="hover:underline" onClick={() => setOpen(false)}>Intérpretes</NavLink>
                <NavLink to="/admin"  className="hover:underline" onClick={() => setOpen(false)}>Admin</NavLink>
            </nav>






    </header>
  );
}

export default Navbar;
