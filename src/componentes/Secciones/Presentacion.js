function Presentacion() {
    return (
        <section className='relative border border-secondary-300/20 bg-gradient-to-b from-secondary-700/40 to-primary/80 backdrop-blur-xl shadow-[0_0_40px_rgba(122,80,255,0.15)] m-0 mt-16 md:mt-10 md:col-span-5 h-fit transition-transform hover:-translate-y-1 duration-500 rounded-2xl'>
            {/* Glowing Orb Background (Simplified to avoid overflow issues) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-secondary-300/20 rounded-t-full filter blur-[80px] -z-10"></div>
            
            <div className='relative flex flex-col p-6 lg:p-10 justify-start items-center text-center z-10'>
                <div className="relative group mb-4">
                    {/* Shadow/Glow effect behind photo */}
                    <div className='w-40 h-40 absolute rounded-full bg-secondary-300/40 blur-2xl -mt-20 lg:-mt-24 left-1/2 -translate-x-1/2 group-hover:bg-secondary-200/50 transition-colors duration-500'></div>
                    
                    <img className='w-40 h-40 object-cover rounded-full z-10 relative -mt-20 lg:-mt-24 border-4 border-primary shadow-2xl group-hover:border-secondary-300 transition-all duration-300' src={`${process.env.PUBLIC_URL}/FotoPresentacion.png`} alt='Foto de Juan Camilo'></img>
                </div>
                
                <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold mx-4 mt-6 mb-2 tracking-tight'>
                    Software Engineer & Technical Leader
                </h1>
                
                <h3 className='text-lg lg:text-xl font-light mx-4 my-4 text-gray-300 leading-relaxed max-w-sm'>
                    Diseño y lidero sistemas complejos en el sector Defensa, asegurando calidad, arquitectura y buenas prácticas.
                </h3>
                
                <div className='flex flex-wrap justify-center gap-3 my-4 font-medium text-sm text-secondary-200 bg-secondary-700/30 py-2 px-4 rounded-full border border-secondary-300/10'>
                    <span>Team Lead @ Indra</span>
                    <span className="opacity-50">•</span>
                    <span>Proyecto europeo ACHILE</span>
                    <span className="opacity-50">•</span>
                    <span>PR Reviewer & Clean Code</span>
                </div>

                <div className='flex flex-col w-full sm:flex-row justify-center gap-4 mt-8'>
                    <a href="#sec_formyexp" className='w-full sm:w-auto bg-gradient-to-r from-secondary-300 to-secondary-250 text-white font-semibold text-sm rounded-xl py-3 px-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(122,80,255,0.4)] transition-all duration-300'>
                        Ver experiencia
                    </a>
                    <a href="#sec_proyectos" className='w-full sm:w-auto bg-transparent border border-secondary-300 text-white font-semibold text-sm rounded-xl py-3 px-6 hover:bg-secondary-300/10 hover:scale-105 transition-all duration-300'>
                        Ver proyectos clave
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Presentacion;