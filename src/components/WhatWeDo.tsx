import { Card, CardContent } from "@/components/ui/card";
import { Compass, MapPin, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Bespoke Itineraries",
    description: "Every journey across the US and Europe is meticulously crafted to match your unique preferences, interests, and travel aspirations."
  },
  {
    icon: MapPin,
    title: "Curated Like a Local",
    description: "Access exclusive experiences and hidden gems across the US and Europe that only insiders know, creating authentic cultural connections."
  },
  {
    icon: Shield,
    title: "Clear & Effortless",
    description: "Seamless planning and execution, removing all complexity while maintaining complete transparency."
  },
  {
    icon: Users,
    title: "Independent & Transparent",
    description: "Unbiased recommendations focused solely on creating your perfect travel experience."
  }
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-navy">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elevating travel into an art form across the US & Europe's most prestigious destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-elevated border-0 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 text-navy">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;