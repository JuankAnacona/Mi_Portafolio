function Tecnologias() {
    const categories = [
        {
            title: "Engineering & Backend",
            icon: "🧠",
            color: "bg-secondary-300",
            skills: [
                { name: "Java", class: "devicon-java-plain" },
                { name: "Spring Boot", class: "devicon-spring-plain" },
                { name: ".NET", class: "devicon-dot-net-plain" },
                { name: "Arquitectura", class: null },
                { name: "Sistemas Distribuidos", class: null }
            ]
        },
        {
            title: "Fullstack & Web",
            icon: "💻",
            color: "bg-secondary-250",
            skills: [
                { name: "Angular", class: "devicon-angularjs-plain" },
                { name: "Blazor", class: "devicon-blazor-original" },
                { name: "React", class: "devicon-react-original" },
                { name: "Tailwind", class: "devicon-tailwindcss-plain" },
                { name: "Firebase", class: "devicon-firebase-plain" },
                { name: "MongoDB", class: "devicon-mongodb-plain" }
            ]
        },
        {
            title: "DevOps & Infrastructure",
            icon: "🚀",
            color: "bg-secondary-200",
            skills: [
                { name: "Docker", class: "devicon-docker-plain" },
                { name: "Jenkins", class: "devicon-jenkins-line" },
                { name: "Git", class: "devicon-git-plain" },
                { name: "Linux", class: "devicon-linux-plain" }
            ]
        }
    ];

    return (
        <section id="sec_tecnologias" className='relative overflow-hidden border border-secondary-300/20 bg-gradient-to-tr from-primary/90 to-secondary-700/50 backdrop-blur-xl shadow-[0_0_30px_rgba(122,80,255,0.1)] m-0 rounded-2xl p-6 lg:p-8 hover:shadow-[0_0_40px_rgba(122,80,255,0.15)] transition-shadow duration-500'>
            <h1 className='text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-100 to-secondary-300 font-extrabold mb-10 text-center tracking-tight'>
                Stack Tecnológico
            </h1>
            
            <div className="space-y-10">
                {categories.map((cat, idx) => (
                    <div key={idx} className="relative">
                        <div className={`absolute -left-4 top-2 w-1 h-8 ${cat.color} rounded-r-md`}></div>
                        <h3 className='text-xl text-white font-semibold mb-6 flex items-center gap-3'>
                            <span className="bg-secondary-700/50 p-2 rounded-lg border border-secondary-300/20 shadow-inner">{cat.icon}</span> 
                            {cat.title}
                        </h3>
                        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-3'>
                            {cat.skills.map((skill, sIdx) => (
                                <div key={sIdx} className="group flex items-center gap-3 bg-secondary-700/40 p-3 rounded-xl border border-secondary-300/10 hover:border-secondary-300/50 hover:bg-secondary-300/10 transition-all cursor-default backdrop-blur-sm">
                                    {skill.class ? (
                                        <i className={`${skill.class} text-xl text-secondary-200 group-hover:text-white transition-colors`}></i>
                                    ) : (
                                        <div className="w-5 h-5 rounded bg-secondary-300/20 flex items-center justify-center text-[10px] text-secondary-100 font-bold">
                                            {skill.name.charAt(0)}
                                        </div>
                                    )}
                                    <span className="text-sm text-secondary-100 group-hover:text-white transition-colors truncate font-medium">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tecnologias;