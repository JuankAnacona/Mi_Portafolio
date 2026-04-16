import React from 'react';

const TechTicker = () => {
    const techStack = [
        { name: 'Java', class: 'devicon-java-plain' },
        { name: 'Spring Boot', class: 'devicon-spring-plain' },
        { name: '.NET', class: 'devicon-dot-net-plain' },
        { name: 'Blazor', class: 'devicon-blazor-original' },
        { name: 'Angular', class: 'devicon-angularjs-plain' },
        { name: 'React', class: 'devicon-react-original' },
        { name: 'HTML5', class: 'devicon-html5-plain' },
        { name: 'Tailwind', class: 'devicon-tailwindcss-original' },
        { name: 'JavaScript', class: 'devicon-javascript-plain' },
        { name: 'TypeScript', class: 'devicon-typescript-plain' },
        { name: 'Node.js', class: 'devicon-nodejs-plain' },
        { name: 'MongoDB', class: 'devicon-mongodb-plain' },
        { name: 'Firebase', class: 'devicon-firebase-plain' },
        { name: 'Docker', class: 'devicon-docker-plain' },
        { name: 'Jenkins', class: 'devicon-jenkins-line' },
        { name: 'Git', class: 'devicon-git-plain' },
        { name: 'Linux', class: 'devicon-linux-plain' },
        { name: 'Jira', class: 'devicon-jira-plain' },
    ];

    // Duplicate for seamless scroll
    const duplicatedStack = [...techStack, ...techStack, ...techStack, ...techStack];

    return (
        <div className="fixed bottom-0 left-0 w-full bg-secondary-800/95 backdrop-blur-xl border-t border-secondary-300/20 py-1.5 overflow-hidden z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.4)]">
            <div className="flex animate-scroll whitespace-nowrap items-center">
                {duplicatedStack.map((tech, index) => (
                    <div key={index} className="flex items-center mx-6 group">
                        <i className={`${tech.class} text-2xl md:text-3xl text-secondary-100 group-hover:text-secondary-300 transition-all duration-300 transform group-hover:scale-110`}></i>
                        <span className="ml-2 text-xs md:text-sm font-medium text-secondary-100 group-hover:text-white transition-colors">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Cinematic Overlay - Top and Bottom lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-300/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-300/20 to-transparent"></div>
        </div>
    );
};

export default TechTicker;
