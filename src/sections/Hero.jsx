import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, Github, Linkedin, ChevronDown, Download } from "lucide-react";

const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Next.js",
    "express",
    "Java",
    "Python",
    "SQL",
    "CSS",
    "HTML",
    "mongoDB",
    "PostgreSQL",
    "tailwind",
    "git",
    "github",
    "github actions",
    "Bitbucket",
    "Jira",
    "Postman",
    "AWS",
    "Docker",
    "Vercel",
    "Bootstrap",
]

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden"> 
    {/* background */}
    <div className="absolute inset-0">
        <img 
        src="/hero-bg.jpg" 
        alt="Hero image" 
        className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
    </div>


    {/* green dots */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
        <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
                backgroundColor: "#20B2A6",
                // eslint-disable-next-line react-hooks/purity
                top: `${Math.random() * 100}%`,
                // eslint-disable-next-line react-hooks/purity
                left: `${Math.random() * 100}%`,
                // eslint-disable-next-line react-hooks/purity
                animation: `slow-drift  ${15 + Math.random() * 20}s 
                            ease-in-out infinite`,
                // eslint-disable-next-line react-hooks/purity
                animationDelay: `${Math.random() * 5}s`,

            }}
        />
        ))}
    </div>



    {/* content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* left colomn - Text Content */}
            <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Software Engineer | React Developer
                    </span>
                </div>
                {/* headline */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Crafting <span className="text-primary glow-text"> digital </span>
                        <br />
                        experiences with
                        <br />
                        <span className="font-serif italic font-normal text-white">
                            Precision
                        </span> 
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        AI-Generated | REDO LATER | I'm a passionate software engineer specializing in React development. I create seamless and engaging web applications that bring ideas to life. With a focus on clean code and user-centric design, I strive to deliver exceptional digital experiences.
                    </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                    <a href="#contact">
                        <Button size = "lg">
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>
                    </a>
                    
                    <a href="/OFarag_Resume.pdf" download>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Download Resume
                        </AnimatedBorderButton>
                    </a>

                </div>

                {/* social icons */}
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                    <span className="text-sm text-muted-foreground">Follow Me: </span>
                    {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    ].map((social, i) => (
                    <a key={i} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                        <social.icon className="w-5 h-5"/>
                    </a>
                    ))}            
                </div>
            </div>
            
            {/* right colomn - Profile Image Portion*/}
            <div className="relative animate-fade-in animation-delay-300">
            {/*Profile Image Section*/}
                <div className="relative max-w-md mx-auto">
                    {/* Profile Image Background Glow */}
                    <div 
                    className="absolute inset-0
                    rounded-3xl bg-linear-to-br 
                    from-primary/30 via-transparent
                    to-primary/10 blur-2xl animate-pulse"
                    />
                    {/* Profile Image */}
                    <div className="relative glass rounded-3xl p-2 glow-border">
                        <img src="/profile-photo.jpg" 
                        alt="Osama Farag" 
                        className="w-full aspect-4/5 object-cover rounded-2xl" 
                        />

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float ">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                <span className="text-sm font-medium">Avalible for work</span>
                            </div>
                        </div>
                        {/* Stats Badge */}
                        <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                            <div className="text-2xl font-bold text-primary">2+</div>
                            <div className="text-xs text-muted-foreground">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                Technologies I work with:
            </p>
            <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                    {[...skills, ...skills,].map((skill, index) => (
                        <div key={index} className="shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                            {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
    animate-fade-in animation-delay-800">
        <a 
        href="#about"
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>
    </div>

    </section>
    );
};