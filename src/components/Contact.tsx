import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
    "24-hour response time",
    "Complimentary consultation", 
    "Personalized attention",
    "Transparent pricing"
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to discover hidden treasures across the US & Europe?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-clean border border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Start Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-gray-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-gray-700 font-medium">
                    Destination of Interest
                  </Label>
                  <Input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    placeholder="e.g., Tuscany, French Riviera, Greek Islands..."
                    className="border-gray-300 focus:border-gray-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dreams" className="text-gray-700 font-medium">
                    Travel Dreams
                  </Label>
                  <Textarea
                    id="dreams"
                    name="dreams"
                    value={formData.dreams}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your perfect luxury travel experience..."
                    className="border-gray-300 focus:border-gray-500 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Promises */}
          <div className="space-y-8">
            <Card className="card-clean border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Email Us Directly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:hello@mineotravel.com"
                  className="text-gray-700 font-medium text-lg hover:text-gray-900 transition-colors"
                >
                  hello@mineotravel.com
                </a>
              </CardContent>
            </Card>

            <Card className="card-clean border border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Our Promise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {promises.map((promise, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {promise}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;