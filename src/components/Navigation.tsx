const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-white hover:text-gray-300 font-sans font-medium transition-colors duration-300"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-gray-300 font-sans font-medium transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-gray-300 font-sans font-medium transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;