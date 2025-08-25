import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900">Services We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive luxury travel services tailored to discerning travelers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="card-clean border border-gray-200 bg-white"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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