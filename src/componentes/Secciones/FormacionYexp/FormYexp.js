function FormyExp() {
    return (
        <section id="sec_formyexp" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-t from-primary/80 to-secondary-700/30 backdrop-blur-xl shadow-[0_0_30px_rgba(122,80,255,0.1)] m-9 md:m-4 rounded-2xl md:col-start-4 md:col-end-8 md:row-start-2 md:row-end-3 p-4 lg:p-6'>

            <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold m-4 md:mt-4 text-center tracking-tight'>Formación Académica</h1>

            {/* Formacion*/}
            <ol className="relative ml-6 lg:ml-10 border-s-2 mb-10 border-secondary-300/30">
                <li className="mb-10 ms-8 group">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-primary bg-secondary-300 shadow-[0_0_15px_rgba(122,80,255,0.5)] group-hover:scale-110 transition-transform">
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="white" data-name="Layer 1" viewBox="0 0 64 64" id="education"><path d="m59.28 18-27-8a1 1 0 0 0-.57 0l-27 8a1 1 0 0 0-.06 1.9L18 24.88V36a3 3 0 0 0 0 6h.16a14 14 0 0 0 27.68 0H46a3 3 0 0 0 0-6V24.88l4-1.48v2.78a3 3 0 0 0-1.15 4.9l-.74 1.47a1 1 0 1 0 1.79.9l.74-1.45a1.8 1.8 0 0 0 .72 0l.75 1.49a1 1 0 1 0 1.79-.9l-.74-1.47A3 3 0 0 0 52 26.18v-3.52l7.35-2.72a1 1 0 0 0-.06-1.9ZM18 40a1 1 0 0 1 0-2Zm26 0a12 12 0 0 1-24 0v-1.08a22.31 22.31 0 0 0 24 0Zm0-3.5a20.32 20.32 0 0 1-24 0v-.58a22.31 22.31 0 0 0 24 0Zm0-3a20.32 20.32 0 0 1-24 0v-7.88l11.65 4.32a1 1 0 0 0 .7 0L44 25.62Zm3 5.5a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1Zm4-9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm-.17-9-18.67-3a1 1 0 0 0-.31 2L47 22.38l-15 5.55-23.84-8.82L32 12l23.84 7.06Z"></path><path d="M30 46v-1a1 1 0 0 0-2 0v1a4 4 0 0 0 8 0v-1a1 1 0 0 0-2 0v1a2 2 0 0 1-4 0Z"></path></svg>
                    </span>
                    <h3 className="font-semibold text-white mb-1 text-lg">FP Grado Medio</h3>
                    <p className="text-sm text-gray-300 font-light">Sistemas MicroInformaticos y redes, 2020 - 2022 IES El Cañaveral </p>
                </li>
                <li className="ms-8 group">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-primary bg-secondary-300 shadow-[0_0_15px_rgba(122,80,255,0.5)] group-hover:scale-110 transition-transform">
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="white" data-name="Layer 1" viewBox="0 0 64 64" id="education"><path d="m59.28 18-27-8a1 1 0 0 0-.57 0l-27 8a1 1 0 0 0-.06 1.9L18 24.88V36a3 3 0 0 0 0 6h.16a14 14 0 0 0 27.68 0H46a3 3 0 0 0 0-6V24.88l4-1.48v2.78a3 3 0 0 0-1.15 4.9l-.74 1.47a1 1 0 1 0 1.79.9l.74-1.45a1.8 1.8 0 0 0 .72 0l.75 1.49a1 1 0 1 0 1.79-.9l-.74-1.47A3 3 0 0 0 52 26.18v-3.52l7.35-2.72a1 1 0 0 0-.06-1.9ZM18 40a1 1 0 0 1 0-2Zm26 0a12 12 0 0 1-24 0v-1.08a22.31 22.31 0 0 0 24 0Zm0-3.5a20.32 20.32 0 0 1-24 0v-.58a22.31 22.31 0 0 0 24 0Zm0-3a20.32 20.32 0 0 1-24 0v-7.88l11.65 4.32a1 1 0 0 0 .7 0L44 25.62Zm3 5.5a1 1 0 0 1-1 1v-2a1 1 0 0 1 1 1Zm4-9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm-.17-9-18.67-3a1 1 0 0 0-.31 2L47 22.38l-15 5.55-23.84-8.82L32 12l23.84 7.06Z"></path><path d="M30 46v-1a1 1 0 0 0-2 0v1a4 4 0 0 0 8 0v-1a1 1 0 0 0-2 0v1a2 2 0 0 1-4 0Z"></path></svg>
                    </span>
                    <h3 className="font-semibold text-white mb-1 text-lg">FP Grado Superior</h3>
                    <p className="text-sm text-gray-300 font-light">Desarrollo de Aplicaciones Web, 2022-2024 IES Alonso de Avellaneda</p>
                </li>
            </ol>

            {/* Experiencia*/}
            <div className="relative mt-12 mb-8 flex justify-center">
                <div className="absolute inset-x-0 top-1/2 border-t border-secondary-300/20"></div>
                <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold px-6 bg-primary z-10 tracking-tight'>Experiencia</h1>
            </div>
            
            <ol className="relative ml-6 lg:ml-10 border-s-2 mb-6 border-secondary-300/30">
                {/* INDRA */}
                <li className="mb-14 ms-8 group">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-primary bg-secondary-300 shadow-[0_0_15px_rgba(122,80,255,0.5)] group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="work"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill="white" d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"></path></svg>
                    </span>
                    <h3 className="font-bold text-white mb-1 text-xl lg:text-2xl tracking-wide">Indra <span className="text-secondary-200 font-medium text-lg lg:text-xl">— Software Engineer / Team Lead</span></h3>
                    <h4 className="text-xs text-secondary-100/70 mb-4 uppercase tracking-widest font-bold">Jun 2024 - Actualidad | Madrid</h4>
                    
                    <div className="text-sm lg:text-base mt-4 text-gray-300 space-y-4 bg-secondary-800/40 p-6 rounded-2xl border border-secondary-300/10 hover:border-secondary-300/30 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(122,80,255,0.15)]">
                        <div className="flex gap-4">
                            <span className="text-secondary-150 font-bold min-w-[85px] uppercase text-xs mt-1">Rol:</span> 
                            <span className="font-light leading-relaxed">Liderazgo técnico de equipo, PR Reviewer y garante de la calidad del software.</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-secondary-150 font-bold min-w-[85px] uppercase text-xs mt-1">Resp:</span> 
                            <span className="font-light leading-relaxed">Diseño de arquitecturas críticas, evolución del sistema y ejecución de testing de integración en entornos complejos.</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-secondary-150 font-bold min-w-[85px] uppercase text-xs mt-1">Contexto:</span> 
                            <span className="font-light leading-relaxed italic text-gray-400">Proyecto internacional ACHILE, sector Defensa.</span>
                        </div>
                        <div className="pt-4 mt-2 border-t border-secondary-300/10">
                            <div className="flex gap-4">
                                <span className="text-white font-bold min-w-[85px] uppercase text-xs mt-1">Impacto:</span> 
                                <span className="text-secondary-100 font-medium">Estandarización de flujos de trabajo e incremento sistemático en la productividad del equipo.</span>
                            </div>
                        </div>
                    </div>
                </li>
                
                {/* SSTRATEGY */}
                <li className="mb-14 ms-8 group">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-primary bg-secondary-700 border border-secondary-300/30 group-hover:bg-secondary-300 transition-colors shadow-lg group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="work"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill="white" d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"></path></svg>
                    </span>
                    <h3 className="font-bold text-white mb-1 text-xl lg:text-2xl tracking-wide">Sstrategy Fintech Company <span className="text-secondary-200 font-medium text-lg lg:text-xl">— FullStack Developer</span></h3>
                    <h4 className="text-xs text-secondary-100/70 mb-4 uppercase tracking-widest font-bold">Abr 2024 - Jun 2024 | Madrid</h4>
                    
                    <div className="text-sm lg:text-base mt-4 text-gray-300 space-y-4 bg-secondary-800/40 p-6 rounded-2xl border border-secondary-300/10 hover:border-secondary-300/30 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(122,80,255,0.15)]">
                        <div className="flex gap-4">
                            <span className="text-secondary-150 font-bold min-w-[85px] uppercase text-xs mt-1">Rol:</span> 
                            <span className="font-light leading-relaxed">Desarrollador FullStack enfocado en la creación de herramientas robustas para el sector bancario.</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-secondary-150 font-bold min-w-[85px] uppercase text-xs mt-1">Resp:</span> 
                            <span className="font-light leading-relaxed">Diseño de visores de documentos XML y testing integral del servidor con JUnit y SpringBootTesting.</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-secondary-150 font-bold min-w-[85px] uppercase text-xs mt-1">Tech:</span> 
                            <span className="font-light leading-relaxed">Uso intensivo de React, Angular y SpringBoot en arquitecturas escalables.</span>
                        </div>
                    </div>
                </li>
                
                {/* ACCENTURE */}
                <li className="ms-8 group">
                    <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-primary bg-secondary-700 border border-secondary-300/30 group-hover:bg-secondary-300 transition-colors shadow-lg group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" id="work"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill="white" d="M14 6V4h-4v2h4zM4 9v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1zm16-3c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"></path></svg>
                    </span>
                    <h3 className="font-bold text-white mb-1 text-xl lg:text-2xl tracking-wide">Accenture <span className="text-secondary-200 font-medium text-lg lg:text-xl">— Soporte Técnico L2</span></h3>
                    <h4 className="text-xs text-secondary-100/70 mb-4 uppercase tracking-widest font-bold">Abr 2022 - Jun 2022 | Madrid</h4>
                    
                    <div className="text-sm lg:text-base mt-4 text-gray-300 space-y-4 bg-secondary-800/40 p-6 rounded-2xl border border-secondary-300/10 hover:border-secondary-300/30 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(122,80,255,0.15)]">
                        <div className="flex gap-4">
                            <span className="text-secondary-150 font-bold min-w-[85px] uppercase text-xs mt-1">Rol:</span> 
                            <span className="font-light leading-relaxed">Soporte técnico avanzado L2 para la resolución de tickets complejos y gestión de infraestructuras corporativas.</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-secondary-150 font-bold min-w-[85px] uppercase text-xs mt-1">Resp:</span> 
                            <span className="font-light leading-relaxed">Resolución de fallos críticos del sistema operativo y mantenimiento preventivo remoto a gran escala.</span>
                        </div>
                    </div>
                </li>
            </ol>

        </section>
    )
}
export default FormyExp;