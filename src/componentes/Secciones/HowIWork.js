import { useLanguage } from '../../context/LanguageContext';

function HowIWork() {
    const { t } = useLanguage();

    return (
        <section id="sec_howiwork" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-t from-primary to-secondary-700/30 backdrop-blur-xl shadow-[0_0_30px_rgba(122,80,255,0.1)] m-0 rounded-2xl md:col-span-12 p-6 lg:p-10 mb-16'>
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-300/50 to-transparent"></div>
            
            <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold mb-12 text-center tracking-tight'>
                {t.howIWork.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="p-6 border border-secondary-300/20 rounded-xl bg-gradient-to-b from-secondary-800/80 to-primary shadow-lg hover:shadow-[0_0_25px_rgba(122,80,255,0.2)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 text-[10rem] font-bold text-secondary-300/5 -z-10 leading-none">1</div>
                    <div className="w-10 h-10 rounded-lg bg-secondary-700 border border-secondary-300/30 flex items-center justify-center text-secondary-100 font-bold mb-4 shadow-inner group-hover:bg-secondary-300 group-hover:text-white transition-colors">1</div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howIWork.card1Title}</h3>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {t.howIWork.card1Desc}
                    </p>
                </div>
                <div className="p-6 border border-secondary-300/20 rounded-xl bg-gradient-to-b from-secondary-800/80 to-primary shadow-lg hover:shadow-[0_0_25px_rgba(122,80,255,0.2)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 text-[10rem] font-bold text-secondary-300/5 -z-10 leading-none">2</div>
                    <div className="w-10 h-10 rounded-lg bg-secondary-700 border border-secondary-300/30 flex items-center justify-center text-secondary-100 font-bold mb-4 shadow-inner group-hover:bg-secondary-300 group-hover:text-white transition-colors">2</div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howIWork.card2Title}</h3>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {t.howIWork.card2Desc}
                    </p>
                </div>
                <div className="p-6 border border-secondary-300/20 rounded-xl bg-gradient-to-b from-secondary-800/80 to-primary shadow-lg hover:shadow-[0_0_25px_rgba(122,80,255,0.2)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 text-[10rem] font-bold text-secondary-300/5 -z-10 leading-none">3</div>
                    <div className="w-10 h-10 rounded-lg bg-secondary-700 border border-secondary-300/30 flex items-center justify-center text-secondary-100 font-bold mb-4 shadow-inner group-hover:bg-secondary-300 group-hover:text-white transition-colors">3</div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howIWork.card3Title}</h3>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {t.howIWork.card3Desc}
                    </p>
                </div>
                <div className="p-6 border border-secondary-300/20 rounded-xl bg-gradient-to-b from-secondary-800/80 to-primary shadow-lg hover:shadow-[0_0_25px_rgba(122,80,255,0.2)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 text-[10rem] font-bold text-secondary-300/5 -z-10 leading-none">4</div>
                    <div className="w-10 h-10 rounded-lg bg-secondary-700 border border-secondary-300/30 flex items-center justify-center text-secondary-100 font-bold mb-4 shadow-inner group-hover:bg-secondary-300 group-hover:text-white transition-colors">4</div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howIWork.card4Title}</h3>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {t.howIWork.card4Desc}
                    </p>
                </div>
                <div className="p-6 border border-secondary-300/20 rounded-xl bg-gradient-to-b from-secondary-800/80 to-primary shadow-lg hover:shadow-[0_0_25px_rgba(122,80,255,0.2)] hover:-translate-y-1 transition-all duration-300 group md:col-span-2 lg:col-span-2 relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 text-[10rem] font-bold text-secondary-300/5 -z-10 leading-none">5</div>
                    <div className="w-10 h-10 rounded-lg bg-secondary-700 border border-secondary-300/30 flex items-center justify-center text-secondary-100 font-bold mb-4 shadow-inner group-hover:bg-secondary-300 group-hover:text-white transition-colors">5</div>
                    <h3 className="text-xl font-bold text-white mb-3">{t.howIWork.card5Title}</h3>
                    <p className="text-sm text-gray-300 font-light leading-relaxed max-w-2xl">
                        {t.howIWork.card5Desc}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HowIWork;
