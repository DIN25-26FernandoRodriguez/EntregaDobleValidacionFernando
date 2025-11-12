function Interprete(props) {
  const { foto, nombre, esNota10 } = props;

  return (
    <article
      tabIndex={0}
      aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`}
      className="flex flex-col items-start gap-3 rounded-lg hover:shadow-lg focus:shadow-lg transition-shadow duration-300">        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 pt-3">{nombre}</h2>
          <p >{props.children}</p>
        </div>
    </article>
  )
}

export default Interprete