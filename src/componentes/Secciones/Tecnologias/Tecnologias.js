function Tecnologias() {
    return (
        <section id="sec_tecnologias" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-tr from-primary/90 to-secondary-700/50 backdrop-blur-xl shadow-[0_0_30px_rgba(122,80,255,0.1)] m-9 md:m-4 rounded-2xl md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-3 p-6 lg:p-8 hover:shadow-[0_0_40px_rgba(122,80,255,0.15)] transition-shadow duration-500'>
            <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold mb-8 text-center tracking-tight'>
                Skills & Expertise
            </h1>
            
            <div className="space-y-8">
                <div className="relative">
                    <div className="absolute -left-4 top-2 w-1 h-8 bg-secondary-300 rounded-r-md"></div>
                    <h3 className='text-xl text-white font-semibold mb-4 flex items-center gap-3'>
                        <span className="bg-secondary-700/50 p-2 rounded-lg border border-secondary-300/20 shadow-inner">🧠</span> 
                        Engineering
                    </h3>
                    <div className='flex flex-wrap gap-2.5'>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Arquitectura de software</span>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Sistemas distribuidos</span>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Patrones de diseño</span>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Clean Code</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-4 top-2 w-1 h-8 bg-secondary-250 rounded-r-md"></div>
                    <h3 className='text-xl text-white font-semibold mb-4 flex items-center gap-3'>
                        <span className="bg-secondary-700/50 p-2 rounded-lg border border-secondary-300/20 shadow-inner">🧪</span> 
                        Testing & Systems
                    </h3>
                    <div className='flex flex-wrap gap-2.5'>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Testing de integración</span>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Redes aplicadas</span>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Entornos complejos críticos</span>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -left-4 top-2 w-1 h-8 bg-secondary-200 rounded-r-md"></div>
                    <h3 className='text-xl text-white font-semibold mb-4 flex items-center gap-3'>
                        <span className="bg-secondary-700/50 p-2 rounded-lg border border-secondary-300/20 shadow-inner">🤖</span> 
                        Innovation
                    </h3>
                    <div className='flex flex-wrap gap-2.5'>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Integración de IA</span>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Model Context Protocol (MCP)</span>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Desarrollo de tooling interno</span>
                        <span className="bg-secondary-700/40 text-secondary-100 py-1.5 px-4 text-sm border-secondary-300/30 border rounded-xl hover:bg-secondary-300/20 hover:border-secondary-300/50 transition-all cursor-default backdrop-blur-sm">Automatización</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Tecnologias;