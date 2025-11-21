// 1. Importa la imagen desde su ubicación en tu proyecto.
// (Asegúrate de cambiar la ruta si tu imagen está en otra carpeta)

function Admin(){
    
    return(
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold text-center mt-10">Panel de administración</h1>
            <p className="text-center mt-4 mb-8">EN PROCESO DE CONSTRUCCIÓN.</p>
            
            {/* 2. Etiqueta <img> para mostrar la imagen */}
            <img 
                src="src/assets/images/descarga.png"
                alt="En construcción: Obreros y conos de seguridad" 
                className="max-w-xs md:max-w-md lg:max-w-lg w-full h-auto" // Clases para asegurar que la imagen es responsive
            />
        </div>
    )
}

export default Admin;