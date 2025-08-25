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
    <section id="contact" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-navy">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to discover hidden treasures across the US & Europe?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-elevated border-0 bg-background/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-navy">
                Start Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-navy font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-accent/20 focus:border-accent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-navy font-medium">
                    Destination of Interest
                  </Label>
                  <Input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="e.g., Tuscany, French Riviera, Greek Islands..."
                    className="border-accent/20 focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dreams" className="text-navy font-medium">
                    Travel Dreams
                  </Label>
                  <Textarea
                    id="dreams"
                    name="dreams"
                    value={formData.dreams}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your perfect luxury travel experience..."
                    className="border-accent/20 focus:border-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-navy hover:bg-navy-light text-white font-medium py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Promises */}
          <div className="space-y-8">
            <Card className="card-elevated border-0 bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-navy">
                  Email Us Directly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a 
                    href="mailto:hello@mineotravel.com"
                    className="text-accent font-medium text-lg hover:text-accent/80 transition-colors"
                  >
                    hello@mineotravel.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated border-0 bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-navy">
                  Our Promise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {promises.map((promise, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <promise.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">
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