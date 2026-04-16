function Logros() {
    return (
        <section id="sec_logros" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-bl from-primary/90 to-secondary-700/50 backdrop-blur-xl shadow-[0_0_30px_rgba(122,80,255,0.1)] m-0 rounded-2xl md:col-span-12 p-6 lg:p-8 hover:shadow-[0_0_40px_rgba(122,80,255,0.15)] transition-shadow duration-500'>
            <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold mb-8 tracking-tight'>
                Key Achievements
            </h1>
            <div className="space-y-6 relative z-10">
                <div className="border-l-4 border-secondary-300 pl-5 py-2 bg-secondary-800/30 rounded-r-xl border-y border-r border-y-secondary-300/10 border-r-secondary-300/10 hover:bg-secondary-800/50 transition-colors shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-3">⚙️ Desarrollo de Internal Tooling & Automatización</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 marker:text-secondary-300">
                        <li>Diseño de integraciones críticas con servicios REST.</li>
                        <li>Implementación de soluciones innovadoras <span className="opacity-70">(Model Context Protocol, IA)</span>.</li>
                        <li className="pt-1"><strong className="text-secondary-150">Impacto:</strong> Aumento significativo en las capacidades funcionales y productividad del equipo.</li>
                    </ul>
                </div>
                <div className="border-l-4 border-secondary-250 pl-5 py-2 bg-secondary-800/30 rounded-r-xl border-y border-r border-y-secondary-300/10 border-r-secondary-300/10 hover:bg-secondary-800/50 transition-colors shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-3">🌍 Hito internacional en Alemania</h3>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 marker:text-secondary-250">
                        <li>Participación activa en iniciativas del proyecto ACHILE in-situ.</li>
                        <li>Colaboración multinacional en el entorno del European Defence Fund (EDF).</li>
                    </ul>
                </div>
                <div className="border-l-4 border-secondary-200 pl-5 py-2 bg-secondary-800/30 rounded-r-xl border-y border-r border-y-secondary-300/10 border-r-secondary-300/10 hover:bg-secondary-800/50 transition-colors shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-3">🧪 Testing avanzado en redes</h3>
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
