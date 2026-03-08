import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const ContactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "osama@example.com",
        href: "mailto:osama@example.com"
    },

    {
        icon: Phone,
        label: "Phone",
        value: "+1 234 567 890",
        href: "tel:+1234567890"
    },

    {
        icon: MapPin,
        label: "Location",
        value: "New York, NY",
        href: "https://www.google.com/maps?q=New+York,+NY"
    }
];

export const Contact = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); 

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        try{
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if(!serviceID || !templateID || !publicKey){
                throw new Error("EmailJS configuration is missing. Check the environment variables.");
            }

            await emailjs.send(serviceID, templateID, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }, publicKey);

            setSubmitStatus({ 
                type: "success", 
                message: "Message sent successfully!" 
            });
            setFormData({ 
                name: "", 
                email: "", 
                message: "" });

        }catch(err){
            console.error("EmailJS Error:", err);
            setSubmitStatus({ 
                type: "error", 
                message: "Failed to send message. Please try again." 
            });
        }finally{
            setIsLoading(false);
        }
    }
    return (
        <section id="contact" className="py-32 relative overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider">
                Get in Touch
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                Let's Build{" "}
                <span className="font-serif italic font-normal text-white">
                Something Great
                </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
            </p>
            </div>

            {/* Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Contact Form */}
            <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                <form className="space-y-6" onSubmit={handleSubmit}>

                <div>
                    <label 
                    htmlFor="name" 
                    type="text"
                    className="block text-sm font-medium mb-2"
                    >
                    Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => 
                        setFormData({ ...formData, name:e.target.value })
                    }
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                </div>

                <div>
                    <label 
                    htmlFor="email" 
                    type="email"
                    className="block text-sm font-medium mb-2"
                    >
                    Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    required
                    placeholder="YourEmail@example.com"
                    value={formData.email}
                    onChange={(e) => 
                        setFormData({ ...formData, email:e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                </div>

                <div>
                    <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2"
                    >
                    Message
                    </label>
                    <textarea
                    id="message"
                    rows="4"
                    required                    
                    value={formData.message}
                    onChange={(e) => 
                        setFormData({ ...formData, message:e.target.value })
                    }
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    ></textarea>
                </div>

                <Button 
                className="w-full" 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                >
                    {isLoading ? (
                            <>Sending..."</>
                        ) : (
                        <>
                            "Send Message"
                            <Send className="w-5 h-5" />
                        </>)}
                </Button>


                {submitStatus.type && (
                    <div 
                    className={`flex items-center gap-3 p-4 rounded-xl 
                        ${submitStatus.type === 'success' 
                            ? 'bg-green-500/10 border border-green-500/20 text-green-500' 
                            : 'bg-red-500/10 border border-red-500/20 text-red-500'
                        }`}
                    >
                        {submitStatus.type === 'success' ? (
                            <CheckCircle className="w-5 h-5 shrink-0" />
                        ) : (
                            <AlertCircle className="w-5 h-5 shrink-0" />
                        )}

                        <p className="text-sm">
                            {submitStatus.message}
                        </p>
                    </div>
                )}
                </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in animation-delay-400">
                <div className="glass rounded-3xl p-8">
                    <h3 className="text-xl font-semibold mb-6">
                    Contact Information
                    </h3>

                    <div className="space-y-4">
                        {ContactInfo.map((item, index) => (
                            <a
                            key={index}
                            href={item.href}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors" />
                                </div>

                                <div className="text-sm text-muted-foreground">
                                    {item.label}
                                </div>

                                <div className="font-medium">
                                    {item.value}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>


                {/* Avalibility */}
                <div>
                    <div>
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-medium">
                            Current Status: <span className="text-green-500 font-medium">Available for work</span>
                        </span>
                    </div>

                    <p className="text-muted-foreground text-sm">
                        I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time or part-time engineer, feel free to reach out! 
                    </p>
                </div>

            </div>

            </div>

        </div>

        </section>
    );
}