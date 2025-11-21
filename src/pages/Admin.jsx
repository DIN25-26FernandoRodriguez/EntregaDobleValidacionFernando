// Panel de administración en construcción
function Admin(){
    
    return(


        <>

        <button>
          <a href="/inicio" className="text-black-500 hover:underline mb-4 inline-bloc bg-[var(--colorNavBar)] p-2 rounded-2xl ">Volver al inicio</a>
        </button>

        <div className="flex flex-col items-center justify-center p-6">
            
            <h1 className="text-4xl font-bold text-center mt-10">Panel de administración</h1>
            <p className="text-center mt-4 mb-8">EN PROCESO DE CONSTRUCCIÓN.</p>
            
            {/* 2. Etiqueta <img> para mostrar una imagen en construcción */}
            <img 
                src="src/assets/images/descarga.png"
                alt="En construcción: Obreros y conos de seguridad" 
                className="max-w-xs md:max-w-md lg:max-w-lg w-full h-auto" 
            />
        </div>
        </>
    )
}

export default Admin;