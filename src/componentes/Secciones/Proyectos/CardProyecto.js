import { useLanguage } from "../../../context/LanguageContext";

function CardProyecto() {
    const { t } = useLanguage();

    return (
        <div className="mx-4 my-4 flex flex-col md:flex-row items-center bg-gradient-to-br from-secondary-700/80 to-primary border rounded-xl shadow-lg border-secondary-300/20 hover:border-secondary-300/50 hover:shadow-[0_0_30px_rgba(122,80,255,0.2)] lg:max-w-4xl transition-all duration-300 group overflow-hidden">
            <div className="md:w-1/3 bg-secondary-700/50 flex flex-col justify-center items-center p-6 border-b md:border-b-0 md:border-r border-secondary-300/10">
                <div className="p-3 bg-secondary-300/10 border border-secondary-300/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-inner text-secondary-150">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 3v1.5M12 3v1.5M15.75 3v1.5M8.25 19.5V21M12 19.5V21M15.75 19.5V21M3 8.25h1.5M3 12h1.5M3 15.75h1.5M19.5 8.25H21M19.5 12H21M19.5 15.75H21M6.75 6.75h10.5v10.5H6.75V6.75z" />
                    </svg>
                </div>
                <h5 className="text-lg font-bold text-center text-white group-hover:text-secondary-150 transition-colors">
                    {t.proyectos.mcp.title}
                </h5>
            </div>
            
            <div className="flex flex-col justify-between p-5 leading-normal w-full">
                <p className="mb-4 text-sm font-normal text-gray-300 leading-relaxed">
                    {t.proyectos.mcp.desc}
                </p>

                <div id='etiquetas_techs' className='flex flex-wrap items-center gap-2 mb-4'>
                    <span className="bg-secondary-300/10 text-secondary-100 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium border border-secondary-300/20">
                        {t.proyectos.mcp.tag1}
                    </span>
                    <span className="bg-secondary-300/10 text-secondary-100 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium border border-secondary-300/20 flex items-center gap-1.5">
                        <img alt="Node.js" src={`${process.env.PUBLIC_URL}/icons/node-js.svg`} className="w-3 h-3" />
                        {t.proyectos.mcp.tag2}
                    </span>
                    <span className="bg-secondary-300/10 text-secondary-100 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-medium border border-secondary-300/20">
                        {t.proyectos.mcp.tag3}
                    </span>
                </div>

                <div className="flex justify-end border-t border-secondary-300/5 pt-3">
                    <span className="text-[10px] uppercase tracking-widest text-secondary-300/50 font-bold group-hover:text-secondary-300 transition-colors">{t.proyectos.mcp.badge}</span>
                </div>
            </div>
        </div>
    );
};
export default CardProyecto;