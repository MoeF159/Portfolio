import { Bug, Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing clean, maintainable code is a priority for me."
    },

    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life."
    },

    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead with the latest technologies and best practices."
    },

    {
        icon: Bug,
        title: "Debugging",
        description: "Skilled at identifying and fixing issues efficiently."
    },
]

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/*  Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the future,
                        <span className="font-serif italic font-normal text-white"> 
                            one component at a time.
                        </span>
                    </h2>

                    {/* About Me Paragraphs */}
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm a software developer with a Computer Science background who enjoys building things that people can actually use. 
                            I'm drawn to modern web development and spend most of my time working with JavaScript, React, and Tailwind CSS. 
                            I like taking an idea, breaking it down, and turning it into a clean application. 
                            For me I enjoy the challenge that comes with figuring out how to put everything together.
                        </p>
            
                        <p>
                            Most of my recent work has focused on building hands-on projects that reflect real-world applications. 
                            I enjoy creating responsive interfaces, connecting front-end components to data, and making sure the final product feels smooth to use.
                            Each project is a chance to learn something new—whether it's improving code structure, or experimenting with new tools. 
                            I'm always trying to push my skills a little further with every project I build.
                        </p>

                        <p>
                            Right now, I'm focused on growing as a developer and looking for an opportunity to start my career in software engineering. 
                            I enjoy learning from others, collaborating on problems, and continuously improving my craft. 
                            Outside of coding, I'm usually exploring new technologies, refining my projects, or thinking about the next idea I want to build. 
                            At the end of the day, I just enjoy creating things with code and seeing them come to life.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            My mission is to build thoughtful, reliable software that solves real problems and creates meaningful experiences for users. 
                            I aim to continuously grow as a developer by learning new technologies, improving my problem-solving skills, and writing clean, maintainable code. 
                            Through curiosity, persistence, and hands-on creation, I strive to turn ideas into practical applications that make technology more useful and accessible.
                        </p>
                    </div>
                </div>

                {/*  Right Column - Highlights */}
            </div>

        </div>
    </section>

    );
}