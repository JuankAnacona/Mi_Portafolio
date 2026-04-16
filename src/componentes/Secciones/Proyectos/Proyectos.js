import CardProyecto from "./CardProyecto";
import CardOdonto from "./CardOdonto";
import CardAgapea from "./CardAgapea";

function Proyectos() {
    return (
        <section id="sec_proyectos" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-b from-primary/80 to-secondary-700/40 backdrop-blur-xl shadow-[0_0_40px_rgba(122,80,255,0.1)] m-0 rounded-2xl md:col-span-7'>
            <div className='flex flex-col p-4 lg:p-6 justify-start items-center z-10 relative'>
                <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold m-4 md:mt-8 text-center tracking-tight'>
                    Mis proyectos
                </h1>
                <div id='cards-proyects' className="w-full flex-col items-center mt-4">
                    {/* PROYECTO 1 - ESTRELLA */}
                    <CardProyecto />
                    
                    {/* PROYECTO 2 - ODONTOLOGÍA */}
                    <div className="mt-8 relative flex flex-col items-center">
                        <div className="absolute inset-x-12 -top-4 border-t border-secondary-300/20"></div>
                        <CardOdonto />
                    </div>

                    {/* PROYECTO 3 - AGAPEA */}
                    <div className="mt-8 relative flex flex-col items-center">
                        <div className="absolute inset-x-12 -top-4 border-t border-secondary-300/20"></div>
                        <CardAgapea />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Proyectos;