import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/button";
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
        <form className="space-y-6">

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="text"
              required
              placeholder="YourEmail@example.com"
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            ></textarea>
          </div>

          <Button>
            Send Message
            <Send />
          </Button>

        </form>
      </div>

    </div>

  </div>

</section>
    );
}