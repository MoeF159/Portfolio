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
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b"/>
                </div>
            </div>

        </section>
    );
};