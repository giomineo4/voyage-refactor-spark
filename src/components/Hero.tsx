import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-chrome/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-6xl">
        <h1 className="hero-title mb-8">
          MINEO TRAVEL
        </h1>
        <p className="text-2xl md:text-3xl text-white/70 mb-16 font-light max-w-4xl mx-auto leading-relaxed tracking-wide">
          Curated luxury experiences across the US & Europe
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="chrome-border bg-transparent hover:bg-white/5 text-white px-12 py-6 text-xl font-medium transition-all duration-500 hover:scale-105 backdrop-blur-sm"
        >
          Start Planning
        </Button>
      </div>

      {/* Chrome scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 chrome-border rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-4 bg-chrome rounded-full mt-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;