const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Thin dividing line is handled by border-t above */}
        
        {/* Centered footer content */}
        <div className="text-center space-y-4">
          {/* Brand name and tagline */}
          <div>
            <h4 className="font-serif text-xl font-medium text-white mb-2">
              MINEO TRAVEL
            </h4>
            <p className="font-sans text-white/80">
              Curated luxury travel experiences for the discerning explorer
            </p>
          </div>
          
          {/* Copyright notice */}
          <p className="font-sans text-white/60 text-sm">
            © 2025 Mineo Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;