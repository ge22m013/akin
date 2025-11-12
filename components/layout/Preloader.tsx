
import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onLoaded: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [percentage, setPercentage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Logo Animation
    const logoPaths = document.querySelectorAll<SVGPathElement>('#preloader-logo path');
    if (logoPaths.length > 0) {
        logoPaths.forEach((path) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
        });

        setTimeout(() => {
            logoPaths.forEach((path, index) => {
                path.style.transition = `stroke-dashoffset 1.5s ${index * 0.3}s ease-in-out`;
                path.style.strokeDashoffset = '0';
            });
        }, 100);
    }
    
    // Percentage Counter
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          setTimeout(onLoaded, 500); // Wait for fade out animation
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Fast interval for smooth loading feel

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="preloader" className={isLoaded ? 'loaded' : ''}>
       <svg id="preloader-logo" width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 80 L50 20 L75 80 M25 80 L90 45" stroke="#00D7FF" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="text-center mt-8">
        <div id="preloader-percentage" className="text-5xl font-bold text-akin-cyan">{percentage}%</div>
        <div id="preloader-text" className="mt-2 text-lg tracking-widest uppercase text-gray-400">Architecting Intelligence</div>
      </div>
    </div>
  );
};

export default Preloader;