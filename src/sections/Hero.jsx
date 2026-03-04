import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, Github, Linkedin } from "lucide-react";

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
                    <Button size = "lg">
                    Contact Me <ArrowRight className="w-5 h-5"/>
                    </Button>

                    <AnimatedBorderButton />

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
            {/* right colomn - Profile Image*/}

        </div>
    </div>
    </section>
    );
}