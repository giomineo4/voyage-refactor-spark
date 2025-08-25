import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    dreams: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours to start planning your dream journey.",
      duration: 5000,
    });
    
    setFormData({ name: "", email: "", destination: "", dreams: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const promises = [
    "24-hour response time",
    "Complimentary consultation", 
    "Personalized attention",
    "Transparent pricing"
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
            Contact Us
          </h2>
          {/* Standardized phrasing */}
          <p className="font-sans text-xl text-white/80 max-w-3xl mx-auto leading-relaxed fade-in stagger-1">
            Ready to discover hidden treasures across the US & Europe?
          </p>
        </div>

        {/* Balanced two-column layout with animations */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Left column - Form with better balance */}
          <div className="card-dark p-8 border border-white/10 shadow-xl slide-up stagger-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-sans text-white font-medium">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="bg-cardDark border-white/20 text-white placeholder:text-white/50 focus:border-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="font-sans text-white font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@email.com"
                  className="bg-cardDark border-white/20 text-white placeholder:text-white/50 focus:border-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="destination" className="font-sans text-white font-medium">
                  Destination of Interest
                </Label>
                <Input
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="e.g., Tuscany, French Riviera, Greek Islands..."
                  className="bg-cardDark border-white/20 text-white placeholder:text-white/50 focus:border-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dreams" className="font-sans text-white font-medium">
                  Travel Dreams
                </Label>
                <Textarea
                  id="dreams"
                  name="dreams"
                  value={formData.dreams}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your perfect luxury travel experience..."
                  className="bg-cardDark border-white/20 text-white placeholder:text-white/50 focus:border-white/50 resize-none"
                />
              </div>
              
              {/* White button with hover effect */}
              <Button 
                type="submit"
                className="w-full bg-white hover:bg-black hover:text-white text-black font-sans font-medium py-4 text-lg transition-all duration-300 border-2 border-transparent hover:border-white"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Right column - Our Promise with matching styling */}
          <div className="card-dark p-8 border border-white/10 shadow-xl slide-up stagger-2">
            <h3 className="font-serif text-2xl font-semibold text-white mb-6">
              Our Promise
            </h3>
            
            {/* Direct email */}
            <div className="mb-8">
              <a 
                href="mailto:hello@mineotravel.com"
                className="font-sans text-white text-lg hover:text-white/80 transition-colors"
              >
                hello@mineotravel.com
              </a>
            </div>
            
            {/* Four promises list with unified bullet styling */}
            <ul className="space-y-4">
              {promises.map((promise, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white/10 border border-white/10 rounded-full flex-shrink-0" />
                  <span className="font-sans text-white/90">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;