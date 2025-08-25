import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "what-we-do", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-overlay">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Brand Name - Serif Font */}
          <div 
            className="font-serif text-xl font-medium cursor-pointer text-white"
            onClick={() => scrollToSection("hero")}
          >
            MINEO TRAVEL
          </div>
          
          {/* Navigation Links with Active States */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("what-we-do")}
              className={`font-sans font-medium transition-all duration-300 relative ${
                isActive("what-we-do") 
                  ? "text-white" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              What We Do
              {isActive("what-we-do") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-sans font-medium transition-all duration-300 relative ${
                isActive("services") 
                  ? "text-white" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              Services
              {isActive("services") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-sans font-medium transition-all duration-300 relative ${
                isActive("contact") 
                  ? "text-white" 
                  : "text-white/70 hover:text-white"
              }`}
            >
              Contact
              {isActive("contact") && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;