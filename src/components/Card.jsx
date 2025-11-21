import { Link } from "react-router-dom";

function Card(props) {
    const { foto, nombre, to } = props;
    return (
        <article
            className="flex flex-col items-start gap-3 p-4 rounded-lg">

            <Link
                to={to}
                tabIndex={0} 
                aria-label={`Abrir detalle de ${nombre}`}
                className="bg-[var(--colorCard)] shadow-md overflow-hidden flex flex-col items-center text-left hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300 w-80 p-5 rounded-2xl">

                <figure className="w-full rounded-lg bg-gray-100 overflow-hidden">

                    <img className="w-80 h-90 object-cover rounded-2xl " src={foto} alt={nombre} />

                </figure>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 pt-3">{nombre}</h2>
                    <p >{props.children}</p>
                </div>
            </Link>
        </article>
    )

}

export default Card;