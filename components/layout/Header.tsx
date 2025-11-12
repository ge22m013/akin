import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AkinLogo from '../ui/AkinLogo';

const navigation = [
  { name: 'Platform', href: '/platform' },
  { name: 'Methodology', href: '/methodology' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Client Stories', href: '/client-stories' },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
];

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const activeLinkClass = "text-akin-cyan";
    const inactiveLinkClass = `hover:text-akin-cyan transition-colors ${isScrolled ? 'text-akin-text-dark' : 'text-white'}`;

    const navLinkClasses = ({ isActive }: { isActive: boolean }) => isActive ? activeLinkClass : inactiveLinkClass;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <AkinLogo className={`h-8 transition-colors duration-300 ${isScrolled ? 'text-akin-text-dark' : 'text-white'}`} />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={(props) => `${navLinkClasses(props)} font-medium px-3 py-2 text-sm`}
                  >
                    {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="/contact" className={`ml-4 px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors ${isScrolled ? 'border-akin-text-dark text-akin-text-dark hover:bg-gray-100' : 'border-white text-white hover:bg-white hover:text-akin-text-dark'}`}>
              Talk to an Engineer
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan ${isScrolled ? 'text-gray-600 bg-gray-100' : 'text-white'}`}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-gray-100 text-akin-cyan' : 'text-akin-text-dark hover:bg-gray-50'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-akin-text-dark hover:bg-akin-cyan hover:text-white transition-colors">
              Talk to an Engineer
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
