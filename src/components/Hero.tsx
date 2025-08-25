import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-luxury-coast.jpg";

const Hero = () => {
  useParallax();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    // Add entrance animation to hero content
    const timer = setTimeout(() => {
      const heroContent = document.querySelector('.hero-content');
      heroContent?.classList.add('visible');
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <div 
        className="absolute inset-0 parallax-hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform'
        }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content with entrance animation */}
      <div className="hero-content relative z-10 text-center px-6 max-w-4xl fade-in">
        {/* Large serif headline */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight text-reveal">
          MINEO TRAVEL
        </h1>
        
        {/* Standardized tagline */}
        <p className="font-sans text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed text-reveal stagger-1">
          Curated luxury experiences across the US & Europe
        </p>
        
        {/* White pill-shaped button with hover effect */}
        <Button
          onClick={scrollToContact}
          className="btn-pill bg-white hover:bg-black hover:text-white text-black font-sans font-medium px-10 py-4 text-lg transition-all duration-300 shadow-lg border-2 border-transparent hover:border-white scale-in stagger-2"
        >
          Start Planning
        </Button>
      </div>
    </section>
  );
};

export default Hero;