import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coastal.jpg";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="hero-title mb-6">
          MINEO TRAVEL
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Curated luxury experiences across the US & Europe
        </p>
        <Button
          onClick={scrollToContact}
          className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
        >
          Start Planning
        </Button>
      </div>
    </section>
  );
};

export default Hero;