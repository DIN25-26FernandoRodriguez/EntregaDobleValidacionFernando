import Interprete from "../pages/Interprete";

function Card(props) {
    const { foto, nombre } = props;
    return (
        <article
            tabIndex={0}
            aria-label={`Intérprete ${nombre}`}
            className="flex flex-col items-start gap-3 p-4 rounded-lg hover:shadow-lg focus:shadow-lg transition-shadow duration-300">

            <div className="bg-white shadow-md  overflow-hidden flex flex-col items-center text-left hover:shadow-lg transition-shadow duration-300 w-80 p-5 rounded-2xl">
                <figure className="w-full rounded-lg bg-gray-100 overflow-hidden">

                    <img className="w-80 h-90 object-cover rounded-2xl " src={foto} alt={nombre} />
                    <figcaption className="sr-only">{props.children}</figcaption>

                </figure>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 pt-3">{nombre}</h2>
                    <p >{props.children}</p>
                </div>
            </div>
        </article>
    )

}

export default Card;