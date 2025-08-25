import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "apple-glass border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div 
            className="font-display text-2xl font-black cursor-pointer chrome-accent tracking-tight"
            onClick={() => scrollToSection("hero")}
          >
            MINEO TRAVEL
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("what-we-do")}
              className="text-white/80 hover:text-white font-medium text-lg py-2 px-4 transition-all duration-300 hover:bg-white/5"
            >
              What We Do
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white font-medium text-lg py-2 px-4 transition-all duration-300 hover:bg-white/5"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-white/80 hover:text-white font-medium text-lg py-2 px-4 transition-all duration-300 hover:bg-white/5"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;