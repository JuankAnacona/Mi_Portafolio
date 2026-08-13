function Logros() {
    return (
        <section id="sec_logros" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-bl from-primary/90 to-secondary-700/50 backdrop-blur-xl shadow-[0_0_30px_rgba(122,80,255,0.1)] m-0 rounded-2xl md:col-span-12 p-6 lg:p-8 hover:shadow-[0_0_40px_rgba(122,80,255,0.15)] transition-shadow duration-500'>
            <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold mb-8 tracking-tight'>
                Key Achievements
            </h1>
            <div className="space-y-6 relative z-10">
                <div className="border-l-4 border-secondary-300 pl-5 py-2 bg-secondary-800/30 rounded-r-xl border-y border-r border-y-secondary-300/10 border-r-secondary-300/10 hover:bg-secondary-800/50 transition-colors shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                        <svg className="w-5 h-5 text-secondary-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Desarrollo de Internal Tooling & Automatización
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 marker:text-secondary-300">
                        <li>Diseño de integraciones críticas con servicios REST.</li>
                        <li>Implementación de soluciones innovadoras <span className="opacity-70">(Model Context Protocol, IA)</span>.</li>
                        <li className="pt-1"><strong className="text-secondary-150">Impacto:</strong> Aumento significativo en las capacidades funcionales y productividad del equipo.</li>
                    </ul>
                </div>
                <div className="border-l-4 border-secondary-250 pl-5 py-2 bg-secondary-800/30 rounded-r-xl border-y border-r border-y-secondary-300/10 border-r-secondary-300/10 hover:bg-secondary-800/50 transition-colors shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                        <svg className="w-5 h-5 text-secondary-250 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
                        </svg>
                        Hito internacional en Alemania
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 marker:text-secondary-250">
                        <li>Participación activa en iniciativas del proyecto ACHILE in-situ.</li>
                        <li>Colaboración multinacional en el entorno del European Defence Fund (EDF).</li>
                    </ul>
                </div>
                <div className="border-l-4 border-secondary-200 pl-5 py-2 bg-secondary-800/30 rounded-r-xl border-y border-r border-y-secondary-300/10 border-r-secondary-300/10 hover:bg-secondary-800/50 transition-colors shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                        <svg className="w-5 h-5 text-secondary-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Testing avanzado en redes
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 marker:text-secondary-200">
                        <li>Configuración y ejecución de pruebas de integración complejas.</li>
                        <li>Simulación de entornos distribuidos y críticos para el sector Defensa.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Logros;
