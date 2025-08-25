import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Bespoke Itineraries",
    description: "Every journey across the US and Europe is meticulously crafted to match your unique preferences, interests, and travel aspirations."
  },
  {
    title: "Curated Like a Local",
    description: "Access exclusive experiences and hidden gems across the US and Europe that only insiders know, creating authentic cultural connections."
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
    <section id="what-we-do" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-gray-900">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elevating travel into an art form across the US & Europe's most prestigious destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-clean border-0 bg-white"
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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