import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  useScrollAnimation();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Centered footer content with animation */}
        <div className="text-center space-y-4 fade-in">
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