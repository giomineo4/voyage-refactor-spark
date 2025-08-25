const features = [
  {
    title: "Bespoke Itineraries",
    description: "Every journey across the US & Europe is meticulously crafted to match your unique preferences, interests, and travel aspirations."
  },
  {
    title: "Curated Like a Local", 
    description: "Access exclusive experiences and hidden gems across the US & Europe that only insiders know, creating authentic cultural connections."
  },
  {
    title: "Clear & Effortless",
    description: "Seamless planning and execution, removing all complexity while maintaining complete transparency."
  },
  {
    title: "Independent & Transparent",
    description: "Unbiased recommendations focused solely on creating your perfect travel experience."
  }
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered heading - White serif font */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            What We Do
          </h2>
          {/* Standardized phrasing */}
          <p className="font-sans text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Elevating travel into an art form across the US & Europe's most prestigious destinations
          </p>
        </div>

        {/* 2x2 grid of dark cards with rounded corners */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-dark p-8"
            >
              {/* Card heading - serif typeface */}
              <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              {/* Description - light grey sans-serif text */}
              <p className="font-sans text-textMuted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;