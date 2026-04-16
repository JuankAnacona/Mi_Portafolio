function CardProyecto() {
    return (
        <div className="mx-4 my-4 flex flex-col md:flex-row items-center bg-gradient-to-br from-secondary-700/80 to-primary border rounded-xl shadow-lg border-secondary-300/20 hover:border-secondary-300/50 hover:shadow-[0_0_30px_rgba(122,80,255,0.2)] lg:max-w-4xl transition-all duration-300 group overflow-hidden">
            <div className="md:w-1/3 bg-secondary-700/50 flex flex-col justify-center items-center p-6 border-b md:border-b-0 md:border-r border-secondary-300/10">
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🤖</span>
                <h5 className="text-lg font-bold text-center text-white group-hover:text-secondary-150 transition-colors">
                    MCP + AI System
                </h5>
            </div>
            
            <div className="flex flex-col justify-between p-5 leading-normal w-full">
                <p className="mb-4 text-sm font-normal text-gray-300 leading-relaxed">
                    Integración de un <span className="text-secondary-200 font-semibold">Model Context Protocol (MCP)</span> para conectar IAs con servicios REST internos, optimizando la productividad mediante orquestación de datos en tiempo real.
                </p>

                <div id='etiquetas_techs' className='flex flex-wrap items-center gap-2 mb-4'>
                    <span className="bg-secondary-300/10 text-secondary-100 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium border border-secondary-300/20">
                        Agentes Custom
                    </span>
                    <span className="bg-secondary-300/10 text-secondary-100 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium border border-secondary-300/20 flex items-center gap-1.5">
                        <img alt="Node.js" src={`${process.env.PUBLIC_URL}/icons/node-js.svg`} className="w-3 h-3" />
                        Node.js
                    </span>
                    <span className="bg-secondary-300/10 text-secondary-100 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium border border-secondary-300/20">
                        API REST
                    </span>
                </div>

                <div className="flex justify-end border-t border-secondary-300/5 pt-3">
                    <span className="text-[10px] uppercase tracking-widest text-secondary-300/50 font-bold group-hover:text-secondary-300 transition-colors">Enterprise Integration</span>
                </div>
            </div>
        </div>
    );
};
export default CardProyecto;