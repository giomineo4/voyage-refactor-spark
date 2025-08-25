import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Custom Itineraries",
    description: "Bespoke travel plans across the US & Europe's most captivating destinations",
    features: [
      "Multi-destination US & European journeys",
      "Day-by-day detailed planning", 
      "Cultural immersion experiences",
      "Flexible scheduling options"
    ]
  },
  {
    title: "Luxury Accommodations",
    description: "Handpicked properties that define luxury across the US & Europe",
    features: [
      "Historic palaces & castles",
      "Boutique luxury hotels",
      "Michelin-starred partnerships", 
      "Exclusive access & upgrades"
    ]
  },
  {
    title: "Culinary Experiences",
    description: "Gastronomic journeys through the finest kitchens across the US & Europe",
    features: [
      "Michelin-starred reservations",
      "Private wine cellar tours",
      "Cooking classes with masters",
      "Local market discoveries"
    ]
  },
  {
    title: "Travel Logistics", 
    description: "Seamless transportation across the US & Europe",
    features: [
      "Private transfers & transportation",
      "High-speed rail & domestic flights",
      "Travel documentation support",
      "Comprehensive travel insurance"
    ]
  }
];

const Services = () => {
  useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
            Services We Offer
          </h2>
          <p className="font-sans text-xl text-white/80 max-w-4xl mx-auto leading-relaxed fade-in stagger-1">
            Comprehensive luxury travel services tailored to discerning travelers
          </p>
        </div>

        {/* 2x2 grid of service cards with staggered animations */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`card-dark p-8 scale-in stagger-${index + 1}`}>
              {/* Card heading - serif font */}
              <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              {/* Short description */}
              <p className="font-sans text-textMuted mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Unified bullet points matching card border styling */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/10 border border-white/10 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-sans text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;