function CardAgapea() {
    return (
        <div className="mx-4 my-4 flex flex-col md:flex-row items-center bg-gradient-to-br from-secondary-700/80 to-primary border rounded-xl shadow-lg lg:max-w-4xl border-secondary-300/20 hover:border-secondary-300/50 hover:shadow-[0_0_30px_rgba(122,80,255,0.2)] transition-all duration-300 group overflow-hidden">
            <div className="relative w-full md:w-48 h-32 md:h-48 flex-shrink-0 bg-white/5 flex items-center justify-center p-6">
                <img className="object-contain w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" src={`${process.env.PUBLIC_URL}/Agapea.png`} alt="img_agapea" />
            </div>
            
            <div className="w-full flex flex-col p-4">
                <div className="flex justify-between items-start mb-2">
                    <h5 className="text-xl font-bold tracking-tight text-white group-hover:text-secondary-150 transition-colors">Agapea .NET Blazor</h5>
                    <div className="flex gap-2">
                        <img alt="Blazor" src={`${process.env.PUBLIC_URL}/icons/blazor.png`} className="w-4 h-4 brightness-110" />
                    </div>
                </div>
                
                <p className="mb-4 text-sm font-normal text-gray-300 leading-relaxed max-w-2xl">
                    Single Page Application para una librería online. Implementación de <span className="text-secondary-200 font-semibold">Blazor WebAssembly</span> con arquitectura de microservicios y patrones de diseño modernos.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-3 border-t border-secondary-300/10">
                    <div className="flex gap-2">
                        <span className="bg-secondary-300/10 text-secondary-100 px-2.5 py-1 rounded-md text-[10px] font-bold border border-secondary-300/10 uppercase tracking-wider">WebAssembly</span>
                        <span className="bg-secondary-300/10 text-secondary-100 px-2.5 py-1 rounded-md text-[10px] font-bold border border-secondary-300/10 uppercase tracking-wider">E-Commerce</span>
                    </div>
                    
                    <div className="flex gap-3">
                        <a className='text-xs font-semibold text-white/50 hover:text-white transition-colors flex items-center gap-1.5' href="https://github.com/JuankAnacona/BlazorAgepea" target="_blank" rel="noreferrer">
                            Código Fuente
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 128 128"><path fillRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardAgapea;

