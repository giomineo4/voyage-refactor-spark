import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
            Contact Us
          </h2>
          <p className="font-sans text-xl text-white/80 max-w-3xl mx-auto leading-relaxed fade-in stagger-1">
            Ready to discover hidden treasures across the US & Europe?
          </p>
        </div>

        {/* Centered contact info */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="card-dark p-12 border border-white/10 shadow-xl slide-up">
            <h3 className="font-serif text-3xl font-semibold text-white mb-8">
              Get In Touch
            </h3>
            
            <p className="font-sans text-white/90 text-lg mb-8 leading-relaxed">
              Email us to inquire about your next luxury travel experience
            </p>
            
            <a 
              href="mailto:giovanni@mineotravel.com"
              className="font-sans text-white text-2xl hover:text-white/80 transition-colors underline decoration-white/20 hover:decoration-white/60 underline-offset-4"
            >
              giovanni@mineotravel.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;