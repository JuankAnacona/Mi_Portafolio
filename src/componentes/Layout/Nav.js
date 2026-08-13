import { useLanguage } from '../../context/LanguageContext';

function Nav() {
    const { lang, toggleLanguage, t } = useLanguage();

    return (
        <nav
            className="fixed top-0 z-50 w-full px-4 py-2 bg-[#07001B]/80 border-b border-secondary-300/10 backdrop-blur-lg lg:px-8 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
                <a href="#df"
                    className="flex items-center gap-3 mr-4 cursor-pointer py-1.5 text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-200 transition-transform hover:scale-105">
                    <img src="./favicon_jk.png" alt="JK Logo" className="w-10 h-10 rounded-lg shadow-lg" />
                    JuanK
                </a>
                <div className="flex items-center gap-4">
                    <div className="hidden mr-4 lg:block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                            <li className="block p-1 font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                <a href="#sec_proyectos" className="flex items-center hover:text-shadow-glow">
                                    {t.nav.projects}
                                </a>
                            </li>
                            <li className="block p-1 font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                <a href="#sec_tecnologias" className="flex items-center hover:text-shadow-glow">
                                    {t.nav.tech}
                                </a>
                            </li>
                            <li className="block p-1 font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                <a href="#sec_sobremi" className="flex items-center hover:text-shadow-glow">
                                    {t.nav.about}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary-700/60 border border-secondary-300/30 hover:border-secondary-300/60 hover:bg-secondary-700 transition-all text-xs font-semibold shadow-inner group cursor-pointer"
                    >
                        <svg className="w-4 h-4 text-secondary-200 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
                        </svg>
                        <span className={lang === 'en' ? 'text-white font-bold' : 'text-gray-400 font-normal'}>EN</span>
                        <span className="text-secondary-300/40">|</span>
                        <span className={lang === 'es' ? 'text-white font-bold' : 'text-gray-400 font-normal'}>ES</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;