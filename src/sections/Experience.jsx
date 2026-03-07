const experience = [
    {
        period: "2026 - Present",
        company: "Independent Project",
        role: "Software Developer",
        description: "Developing a stock market tracking application with OTP authentication, MongoDB watchlists, email price alerts, and external stock API integration.",
        technologies: ['Next.js', 'Tailwind', 'Better-Auth', 'MongoDB', 'TypeScript'],
        current: true,
    },

    {
        period: "2026",
        company: "IBM Skills Network",
        role: "Full Stack Developer Certification",
        description: "Completed full-stack training covering frontend development, backend APIs, and database integration using modern web technologies.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Python', 'Django', 'Flask', 'Git', 'GitHub', 'Serverless', 'Docker', 'Kubernetes', 'Postman'],
        current: false,
    },

    {
        period: "2025",
        company: "Dunkin",
        role: "Freelance Software Developer",
        description: "Developed a Java-based internal application using JavaFX for the UI and server sockets for real-time data processing to automate employee hour, overtime, and break calculations.",
        technologies: ["Java", "JavaFX", "ServerSockets"],
        current: false,
    },

    {
        period: "2023 - 2025",
        company: "Dunkin",
        role: "IT Support Technician",
        description: "Maintained and troubleshot POS systems, store computers, and networking equipment across multiple locations by diagnosing hardware and software issues and implementing fixes to minimize downtime.",
        technologies: [],
        current: false,
    },

    {
        period: "2019 - 2023",
        company: "University of Pittsburgh",
        role: "B.S. in Computer Science",
        description: "Built foundational skills in programming, algorithms, data structures, and software development principles.",
        technologies: ['Java', 'Python', 'C++', 'SQL', 'Git', 'Linux'],
        current: false,
    }
];

export const Experience = () => {
    return (
        <section
            id="experience"
            className="py-32 relative overflow-hidden"
        >
            <div 
                className="absolute top-1/2 left-1/4 w-96 h-96 
                bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */ }
                <div className="max-w-3xl mb-16">
                    <span
                        className="text-secondary-foreground text-sm
                        font-medium tracking-wider uppercase animate-fade-in"
                    >
                        Career Journey
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold
                        mt-4 mb-6 animate-fade-in animation-delay-100
                        text-secondary-foreground"
                    >
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white"> 
                            {" "}speaks volumes.
                        </span>
                    </h2>

                    <p
                        className="text-muted-foreground
                        animate-fade-in animation-delay-200"
                    >
                        A timeline of my professional growth, from my early days at the University of Pittsburgh to my current independent projects. 
                        My career has been a blend of learning, growth, and hands-on experience. 
                        Each role — from IT support to building internal tools and completing full-stack training — has strengthened my skills as a software developer, equipping me to tackle complex challenges and create impactful solutions.
                    </p>
                </div>

                {/* Experience Timeline */ }
                <div className="relative">
                    {/* Vertical Line */ }
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                    
                    {/* Experience Items */ }
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div 
                            key= {index} 
                            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{animationDelay: `${(index + 1) * 150}ms`}}
                            >
                                
                                {/* Timeline Dot */ }
                                <div 
                                className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10"
                                >
                                    {exp.current && (<span className = "absolute inset-0 rounded-full bg-primary animate-ping opactiy-75" />)}
                                </div>

                                {/* Experience Content */ }
                                <div 
                                className={`pl-8 md:pl-0 
                                    ${index % 2 === 0 
                                    ? 'md:pr-16 md:text-right' 
                                    : 'md:col-start-2 md:pl-16'
                                    }`}
                                >
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 
                                                ${index % 2 === 0 
                                                ? 'md:justify-end' 
                                                : ''}`}
                                            >
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span 
                                                key={techIndex} 
                                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};