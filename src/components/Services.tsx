import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Custom Itineraries",
    description: "Bespoke travel plans across the US and Europe's most captivating destinations",
    features: [
      "Multi-destination US & European journeys",
      "Day-by-day detailed planning",
      "Cultural immersion experiences",
      "Flexible scheduling options"
    ]
  },
  {
    title: "Luxury Accommodations",
    description: "Handpicked properties that define luxury across the US and Europe",
    features: [
      "Historic palaces & castles",
      "Boutique luxury hotels",
      "Michelin-starred partnerships",
      "Exclusive access & upgrades"
    ]
  },
  {
    title: "Culinary Experiences",
    description: "Gastronomic journeys through the finest kitchens across the US and Europe",
    features: [
      "Michelin-starred reservations",
      "Private wine cellar tours",
      "Cooking classes with masters",
      "Local market discoveries"
    ]
  },
  {
    title: "Travel Logistics",
    description: "Seamless transportation across the US and Europe",
    features: [
      "Private transfers & transportation",
      "High-speed rail & domestic flights",
      "Travel documentation support",
      "Comprehensive travel insurance"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="section-title text-white mb-6">Services We Offer</h2>
          <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive luxury travel services tailored to discerning travelers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="card-elevated hover:border-chrome/30 transition-all duration-500 group"
            >
              <CardHeader className="pb-6">
                <CardTitle className="font-display text-3xl font-bold text-white mb-4 group-hover:chrome-accent transition-all duration-300">
                  {service.title}
                </CardTitle>
                <p className="text-white/70 leading-relaxed text-lg font-light">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-chrome mt-1 flex-shrink-0" />
                      <span className="text-white/80 text-lg font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;