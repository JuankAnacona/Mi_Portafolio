function CardOdonto() {
    return (
        <div className="mx-4 my-4 flex flex-col md:flex-row items-center bg-gradient-to-br from-secondary-700/80 to-primary border rounded-xl shadow-lg lg:max-w-4xl border-secondary-300/20 hover:border-secondary-300/50 hover:shadow-[0_0_30px_rgba(122,80,255,0.2)] transition-all duration-300 group overflow-hidden">
            <div className="relative w-full md:w-48 h-48 md:h-full flex-shrink-0">
                <img className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity" src={`${process.env.PUBLIC_URL}/Proyecto1.png`} alt="img_proyecto1" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent md:bg-gradient-to-r"></div>
            </div>
            
            <div className="w-full flex flex-col p-4">
                <div className="flex justify-between items-start mb-2">
                    <h5 className="text-xl font-bold tracking-tight text-white group-hover:text-secondary-150 transition-colors">Consultorio Odontológico</h5>
                    <div className="flex gap-2">
                        <img alt="Angular" src={`${process.env.PUBLIC_URL}/icons/angular.svg`} className="w-4 h-4 brightness-125" />
                        <img alt="Firebase" src={`${process.env.PUBLIC_URL}/icons/firebase.svg`} className="w-4 h-4 brightness-125" />
                    </div>
                </div>
                
                <p className="mb-4 text-sm font-normal text-gray-300 leading-relaxed max-w-2xl">
                    Gestión integral de pacientes y consultas. Desarrollo <span className="text-secondary-200">Full Stack</span> con sincronización en tiempo real y arquitectura reactiva.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-3 border-t border-secondary-300/10">
                    <div className="flex gap-2">
                        <span className="bg-secondary-300/10 text-secondary-100 px-2.5 py-1 rounded-md text-[10px] font-bold border border-secondary-300/10 uppercase tracking-wider">FullStack</span>
                        <span className="bg-secondary-300/10 text-secondary-100 px-2.5 py-1 rounded-md text-[10px] font-bold border border-secondary-300/10 uppercase tracking-wider">HealthCare</span>
                    </div>
                    
                    <div className="flex gap-3">
                        <a className='text-xs font-semibold text-white/50 hover:text-white transition-colors flex items-center gap-1.5' href="https://clinica-odontolgica.vercel.app/Clinica/Inicio" target="_blank" rel="noreferrer">
                            Ver Demo
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardOdonto;

