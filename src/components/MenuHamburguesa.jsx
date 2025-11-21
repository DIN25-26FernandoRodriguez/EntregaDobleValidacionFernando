import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {


const [open, setOpen] = useState(false);
return (
<>
<button onClick={() => setOpen(!open)}>
☰
</button>
<nav className={open ? "block" : "hidden"}>
<NavLink to="/" onClick={() => setOpen(false)}>Inicio</NavLink>
<NavLink to="/peliculas" onClick={() => setOpen(false)}>Películas</NavLink>
<NavLink to="/interpretes" onClick={() => setOpen(false)}>Intérpretes</NavLink>
</nav>
</>
);
}