
import React, { useEffect, useState, useCallback } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/pages/HomePage';
import PlatformPage from './components/pages/PlatformPage';
import MethodologyPage from './components/pages/MethodologyPage';
import SolutionsPage from './components/pages/SolutionsPage';
import ClientStoriesPage from './components/pages/ClientStoriesPage';
import InsightsPage from './components/pages/InsightsPage';
import AboutPage from './components/pages/AboutPage';
import ThriveIndexPage from './components/pages/ThriveIndexPage';
import CareersPage from './components/pages/CareersPage';
import ContactPage from './components/pages/ContactPage';
import InsightModal from './components/ui/InsightModal';

export interface Content {
  id: string;
  title: string;
  category: string;
  content: string;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [activeContent, setActiveContent] = useState<Content | null>(null);

  const handleOpenContent = (content: Content) => {
    setActiveContent(content);
  };

  const handleCloseContent = () => {
    setActiveContent(null);
  };
  
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    const percentageEl = document.getElementById('preloader-percentage');
    const logoPaths = document.querySelectorAll<SVGPathElement>('#preloader-logo path');

    if (!preloader || !percentageEl) {
        setIsReady(true);
        return;
    }

    // Logo Animation
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
    let percentage = 0;
    const interval = setInterval(() => {
        percentage++;
        percentageEl.textContent = `${percentage}%`;

        if (percentage >= 100) {
            clearInterval(interval);
            preloader.classList.add('loaded');
            
            const onTransitionEnd = () => {
                if(document.body.contains(preloader)) {
                    preloader.remove();
                }
                setIsReady(true);
            };
            
            preloader.addEventListener('transitionend', onTransitionEnd, { once: true });

            // Fallback for safety in case transitionend doesn't fire
            setTimeout(() => {
                if (document.body.contains(preloader)) {
                    preloader.remove();
                }
                setIsReady(true);
            }, 600);
        }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <HashRouter>
        <>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-white text-akin-text-dark">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/platform" element={<PlatformPage />} />
                <Route path="/methodology" element={<MethodologyPage />} />
                <Route path="/solutions" element={<SolutionsPage onSolutionClick={handleOpenContent} />} />
                <Route path="/client-stories" element={<ClientStoriesPage />} />
                <Route path="/insights" element={<InsightsPage onInsightClick={handleOpenContent} />} />
                <Route path="/insights/thrive-index" element={<ThriveIndexPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <InsightModal content={activeContent} onClose={handleCloseContent} />
        </>
    </HashRouter>
  );
};

export default App;
