import { useLanguage } from '../../context/LanguageContext';

function Liderazgo() {
    const { t } = useLanguage();

    const pilares = [
        {
            title: t.liderazgo.pilar1Title,
            desc: t.liderazgo.pilar1Desc,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "from-blue-500/20 to-secondary-300/20"
        },
        {
            title: t.liderazgo.pilar2Title,
            desc: t.liderazgo.pilar2Desc,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            color: "from-purple-500/20 to-secondary-300/20"
        },
        {
            title: t.liderazgo.pilar3Title,
            desc: t.liderazgo.pilar3Desc,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            color: "from-pink-500/20 to-secondary-300/20"
        }
    ];

    return (
        <section id="sec_liderazgo" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-br from-primary/90 to-secondary-700/50 backdrop-blur-xl shadow-[0_0_30px_rgba(122,80,255,0.1)] m-0 rounded-2xl p-6 lg:p-8 hover:shadow-[0_0_40px_rgba(122,80,255,0.15)] transition-shadow duration-500'>
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-secondary-200 rounded-full"></div>
                <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold tracking-tight'>
                    {t.liderazgo.title}
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {pilares.map((pilar, idx) => (
                    <div key={idx} className={`group relative p-5 rounded-2xl border border-secondary-300/10 bg-gradient-to-r ${pilar.color} hover:border-secondary-300/40 transition-all duration-300 overflow-hidden`}>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 p-3 bg-primary/60 rounded-xl border border-secondary-300/20 text-secondary-200 group-hover:scale-110 group-hover:text-white transition-all">
                                {pilar.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary-150 transition-colors">
                                    {pilar.title}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed font-light">
                                    {pilar.desc}
                                </p>
                            </div>
                        </div>
                        {/* Decorative background glow */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary-300/5 blur-3xl rounded-full"></div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-secondary-300/5 border border-dashed border-secondary-300/20 flex items-center justify-center gap-3 text-sm text-secondary-200 italic">
                <svg className="w-5 h-5 text-secondary-300/70 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                {t.liderazgo.quote}
            </div>
        </section>
    );
}

export default Liderazgo;
