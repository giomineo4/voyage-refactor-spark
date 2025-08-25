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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-navy">Services We Offer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive luxury travel services tailored to discerning travelers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="card-elevated border border-border/50 hover:border-accent/30 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="font-display text-2xl text-navy mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
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