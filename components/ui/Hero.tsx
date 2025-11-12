import React, { useRef } from 'react';
import NeuronBackground from './NeuronBackground';
import Globe from './Globe';
import { useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  breadcrumb?: string;
  showGlobe?: boolean;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, breadcrumb, showGlobe = false, children }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="hero-section text-center py-20 md:py-32 lg:py-40 min-h-[70vh] flex items-center justify-center">
      <NeuronBackground translateY={backgroundY} />
      {showGlobe && <Globe />}
      <div className="hero-content max-w-4xl mx-auto px-4">
        {breadcrumb && (
             <p className="text-base font-semibold text-akin-cyan uppercase tracking-wide">{breadcrumb}</p>
        )}
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-akin-text-light">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};

export default Hero;