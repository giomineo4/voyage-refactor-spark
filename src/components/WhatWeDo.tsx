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
    <section id="what-we-do" className="py-32 bg-black">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="section-title text-white mb-6">What We Do</h2>
          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
            Elevating travel into an art form across the US & Europe's most prestigious destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-elevated hover:border-chrome/30 transition-all duration-500 group"
            >
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-chrome/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-chrome/20 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-chrome" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6 text-white group-hover:chrome-accent transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed font-light">
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