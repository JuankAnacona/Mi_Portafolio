function Nav() {
    return (
        <nav
            className="fixed top-0 z-50 w-full px-4 py-2 bg-[#07001B]/80 border-b border-secondary-300/10 backdrop-blur-lg lg:px-8 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
                <a href="#df"
                    className="flex items-center gap-3 mr-4 block cursor-pointer py-1.5 text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-200 transition-transform hover:scale-105">
                    <img src="./favicon_jk.png" alt="JK Logo" className="w-10 h-10 rounded-lg shadow-lg" />
                    JuanK
                </a>
                <div className="flex items-center gap-4">
                    <div className="hidden mr-4 lg:block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                            <li className="block p-1 font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                <a href="#sec_proyectos" className="flex items-center hover:text-shadow-glow">
                                    Mis Proyectos
                                </a>
                            </li>
                            <li className="block p-1 font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                <a href="#sec_tecnologias" className="flex items-center hover:text-shadow-glow">
                                    Tecnologias
                                </a>
                            </li>
                            <li className="block p-1 font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                <a href="#sec_sobremi" className="flex items-center hover:text-shadow-glow">
                                    Sobre mi
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;