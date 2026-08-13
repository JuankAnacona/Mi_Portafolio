import { useLanguage } from '../../context/LanguageContext';

function SobreMi() {
    const { t } = useLanguage();

    return (
        <section id="sec_sobremi" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-t from-primary/90 to-secondary-700/40 backdrop-blur-xl shadow-[0_0_30px_rgba(122,80,255,0.1)] m-0 rounded-2xl p-6 lg:p-8 hover:shadow-[0_0_40px_rgba(122,80,255,0.15)] transition-shadow duration-500'>
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary-300 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

            <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-secondary-300 rounded-full"></div>
                <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold tracking-tight'>
                    {t.sobreMi.title}
                </h1>
            </div>

            <div className='text-lg space-y-6 text-gray-300 font-light leading-relaxed relative z-10'>
                <p className="bg-secondary-800/30 p-5 rounded-xl border border-secondary-300/10 hover:border-secondary-300/30 transition-colors shadow-inner">
                    {t.sobreMi.p1}<strong className="text-secondary-150 font-semibold">{t.sobreMi.p1Bold}</strong>{t.sobreMi.p1End}
                </p>
                <p className="bg-secondary-800/30 p-5 rounded-xl border border-secondary-300/10 hover:border-secondary-300/30 transition-colors shadow-inner">
                    {t.sobreMi.p2}<strong className="text-secondary-150 font-semibold">{t.sobreMi.p2Bold}</strong>{t.sobreMi.p2End}
                </p>
                <p className="bg-secondary-800/30 p-5 rounded-xl border border-secondary-300/10 hover:border-secondary-300/30 transition-colors shadow-inner">
                    {t.sobreMi.p3}<span className="text-secondary-100">{t.sobreMi.p3Highlight}</span> {t.sobreMi.p3End}
                </p>
            </div>
        </section>
    );
}
export default SobreMi;