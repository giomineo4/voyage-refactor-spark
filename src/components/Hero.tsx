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
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Large serif headline */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
          MINEO TRAVEL
        </h1>
        
        {/* Standardized tagline */}
        <p className="font-sans text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
          Curated luxury experiences across the US & Europe
        </p>
        
        {/* White pill-shaped button with hover effect */}
        <Button
          onClick={scrollToContact}
          className="btn-pill bg-white hover:bg-black hover:text-white text-black font-sans font-medium px-10 py-4 text-lg transition-all duration-300 shadow-lg border-2 border-transparent hover:border-white"
        >
          Start Planning
        </Button>
      </div>
    </section>
  );
};

export default Hero;