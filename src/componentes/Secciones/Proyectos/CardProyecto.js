function CardProyecto() {
    return (
        <div className="mx-4 my-6 flex flex-col items-center bg-gradient-to-br from-secondary-700/80 to-primary border rounded-xl shadow-lg border-secondary-300/20 hover:border-secondary-300/50 hover:shadow-[0_0_30px_rgba(122,80,255,0.2)] lg:max-w-4xl transition-all duration-300 group">
            <div className="flex flex-col justify-between p-6 lg:p-8 leading-normal w-full">
                <div className="flex items-center gap-3 mb-4">
                    <h5 className="text-2xl font-bold tracking-tight text-white group-hover:text-secondary-150 transition-colors duration-300">
                        ⭐ MCP + AI System Integration
                    </h5>
                </div>
                
                <p className="mb-6 font-normal text-gray-300 leading-relaxed">
                    Diseño e implementación de un Model Context Protocol (MCP) local para integrar asistentes de Inteligencia Artificial con los servicios REST internos del sistema.
                </p>

                <div className="mb-5 bg-secondary-700/30 p-4 rounded-lg border border-secondary-300/10">
                    <h6 className="text-lg font-semibold text-secondary-200 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-300"></span>
                        El Problema
                    </h6>
                    <p className="text-sm text-gray-300">
                        La necesidad de dotar de capacidades inteligentes a los flujos de trabajo sin comprometer la seguridad de los datos en un entorno crítico.
                    </p>
                </div>

                <div className="mb-5 bg-secondary-700/30 p-4 rounded-lg border border-secondary-300/10">
                    <h6 className="text-lg font-semibold text-secondary-200 mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-300"></span>
                        La Solución
                    </h6>
                    <p className="text-sm text-gray-300">
                        Desarrollo de un servidor MCP custom en Node.js que expone los endpoints internos de manera segura para asistentes de IA, permitiendo la orquestación y el análisis de datos contextuales en tiempo real.
                    </p>
                </div>

                <div className="mb-6 border-l-4 border-secondary-300 pl-4 py-1">
                    <h6 className="text-lg font-semibold text-white mb-1">Impacto Real</h6>
                    <p className="text-sm text-gray-300">
                        Aumento sustancial en la productividad de los desarrolladores y mejora directa en las capacidades del sistema. Agilización de tareas operativas y análisis mediante contexto in-situ.
                    </p>
                </div>

                <div id='etiquetas_techs' className='flex flex-wrap items-center mt-2 gap-3'>
                    <span className="bg-secondary-300/20 text-secondary-100 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-secondary-300/30 hover:bg-secondary-300/30 transition-colors">
                        🤖 Agentes Custom
                    </span>
                    <span className="bg-secondary-300/20 text-secondary-100 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-secondary-300/30 flex items-center gap-2 hover:bg-secondary-300/30 transition-colors">
                        <img alt="Node.js" src={`${process.env.PUBLIC_URL}/icons/node-js.svg`} className="object-contain w-4 h-4 brightness-150" />
                        MCP Node.js
                    </span>
                    <span className="bg-secondary-300/20 text-secondary-100 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-secondary-300/30 hover:bg-secondary-300/30 transition-colors">
                        🌐 API REST
                    </span>
                    <span className="bg-secondary-300/20 text-secondary-100 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold border border-secondary-300/30 hover:bg-secondary-300/30 transition-colors">
                        💻 VS Code & AI Assistants
                    </span>
                </div>
            </div>
        </div>
    );
};
export default CardProyecto;