function CardAgapea() {
    return (
        <div className="mx-4 my-6 flex flex-col items-center bg-gradient-to-br from-secondary-700/80 to-primary border rounded-xl shadow-lg md:flex-row lg:max-w-4xl border-secondary-300/20 hover:border-secondary-300/50 hover:shadow-[0_0_30px_rgba(122,80,255,0.2)] transition-all duration-300 group">
            <img className="object-cover w-full rounded-t-xl h-60 md:h-full md:w-64 md:rounded-none md:rounded-l-xl opacity-90 group-hover:opacity-100 transition-opacity p-4" src={`${process.env.PUBLIC_URL}/Agapea.png`} alt="img_agapea" />
            <div className="w-full p-2">
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white group-hover:text-secondary-150 transition-colors duration-300">Agapea .NET Core & Blazor</h5>
                    <p className="mb-3 font-normal text-sm text-gray-300 leading-relaxed">
                        Desarrollo de una Single Page Application (SPA) compleja para la gestión de una librería online, implementando patrones de diseño modernos y comunicación asíncrona con servicios REST.
                    </p>
                </div>

                <div id='etiquetas_techs' className='flex flex-wrap justify-start px-4 gap-3'>
                    <span
                        className="bg-secondary-300/20 text-secondary-100 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold border border-secondary-300/30 flex items-center gap-2 hover:bg-secondary-300/30 transition-colors mb-2">
                        <img
                            alt="Icono de Blazor" src={`${process.env.PUBLIC_URL}/icons/blazor.png`} decoding="async"
                            data-nimg="1" className="object-cover w-4 h-4 brightness-125" loading="lazy"
                        />
                        <span className="lg:inline font-semibold">Blazor WASM</span>
                    </span>
                    <span
                        className="bg-secondary-300/20 text-secondary-100 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold border border-secondary-300/30 flex items-center gap-2 hover:bg-secondary-300/30 transition-colors mb-2">
                         <span className="text-xs">⚙️</span>
                        <span className="lg:inline font-semibold">.NET Core</span>
                    </span>
                    <span
                        className="bg-secondary-300/20 text-secondary-100 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold border border-secondary-300/30 flex items-center gap-2 hover:bg-secondary-300/30 transition-colors mb-2">
                        <span className="text-xs">💾</span>
                        <span className="lg:inline font-semibold">Entity Framework</span>
                    </span>
                </div>
                <div className="flex flex-wrap px-4 gap-3 py-4">
                    <a className='bg-gradient-to-r from-secondary-300 to-secondary-250 text-sm rounded-xl p-2 px-4 hover:scale-105 hover:shadow-[0_0_15px_rgba(122,80,255,0.4)] transition-all duration-300 flex font-medium text-white items-center' href="https://github.com/JuankAnacona/BlazorAgepea" target="_blank" rel="noreferrer">
                        Repositorio GitHub&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 128 128" id="github"><path fillRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardAgapea;
