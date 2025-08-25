import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    elementsRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-up, .scale-in, .text-reveal'
    );

    animatedElements.forEach((el) => {
      elementsRef.current?.observe(el);
    });

    return () => {
      if (elementsRef.current) {
        elementsRef.current.disconnect();
      }
    };
  }, []);

  return elementsRef;
};

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroElement = document.querySelector('.parallax-hero');
      
      if (heroElement) {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (heroElement as HTMLElement).style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};