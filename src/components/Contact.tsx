import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Clock, Shield, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    dreams: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours to start planning your dream journey.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({ name: "", email: "", destination: "", dreams: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const promises = [
    {
      icon: Clock,
      title: "24-hour response time"
    },
    {
      icon: Heart,
      title: "Complimentary consultation"
    },
    {
      icon: Shield,
      title: "Personalized attention"
    },
    {
      icon: Mail,
      title: "Transparent pricing"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="section-title text-white mb-6">Contact Us</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to discover hidden treasures across the US & Europe?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="font-display text-3xl font-bold text-white mb-2">
                Start Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-white font-medium text-lg">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-white/20 focus:border-chrome text-white placeholder:text-white/40 py-4 text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-white font-medium text-lg">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-white/20 focus:border-chrome text-white placeholder:text-white/40 py-4 text-lg"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="destination" className="text-white font-medium text-lg">
                    Destination of Interest
                  </Label>
                  <Input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="e.g., Tuscany, French Riviera, Greek Islands..."
                    className="bg-gray-800/50 border-white/20 focus:border-chrome text-white placeholder:text-white/40 py-4 text-lg"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="dreams" className="text-white font-medium text-lg">
                    Travel Dreams
                  </Label>
                  <Textarea
                    id="dreams"
                    name="dreams"
                    value={formData.dreams}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your perfect luxury travel experience..."
                    className="bg-gray-800/50 border-white/20 focus:border-chrome text-white placeholder:text-white/40 resize-none text-lg"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full chrome-border bg-transparent hover:bg-white/5 text-white font-medium py-6 text-xl transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Promises */}
          <div className="space-y-10">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-display text-3xl font-bold text-white mb-2">
                  Email Us Directly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <a 
                    href="mailto:hello@mineotravel.com"
                    className="chrome-accent font-medium text-2xl hover:text-chrome-light transition-colors duration-300 block"
                  >
                    hello@mineotravel.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="font-display text-3xl font-bold text-white mb-2">
                  Our Promise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {promises.map((promise, index) => (
                    <div key={index} className="flex items-center gap-5 group">
                      <div className="w-14 h-14 bg-chrome/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-chrome/20 transition-all duration-300">
                        <promise.icon className="w-7 h-7 text-chrome" />
                      </div>
                      <span className="text-white/80 font-medium text-lg">
                        {promise.title}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;