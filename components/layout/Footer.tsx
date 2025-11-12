import React from 'react';
import { Link } from 'react-router-dom';
import AkinLogo from '../ui/AkinLogo';

const footerLinks = {
  platform: [
    { name: 'Unified Ontology', href: '/platform' },
    { name: 'Open Architecture & Integration', href: '/platform' },
    { name: 'Bespoke AI Model Development', href: '/platform' },
    { name: 'Operational Deployment', href: '/platform' },
    { name: 'Security & Governance', href: '/platform' },
  ],
  solutions: [
    { name: 'Intelligent Manufacturing', href: '/solutions' },
    { name: 'Resilient Supply Chain', href: '/solutions' },
    { name: 'AI-Driven Finance & Risk', href: '/solutions' },
    { name: 'The Digital Utility', href: '/solutions' },
    { name: 'Predictive Maintenance', href: '/solutions' },
  ],
  company: [
    { name: 'About Akin', href: '/about' },
    { name: 'Our Mission & Story', href: '/about' },
    { name: 'Leadership', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ],
  insights: [
    { name: 'The Thrive Index', href: '/insights/thrive-index' },
    { name: 'Blog / Articles', href: '/insights' },
    { name: 'Reports & Whitepapers', href: '/insights' },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-akin-text-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <AkinLogo className="h-8 text-akin-text-dark" />
            <p className="text-sm">
              Akin Technology builds bespoke AI operating systems that unify data, models, and operations.
            </p>
            <div className="flex space-x-6">
              {/* Social icons would go here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-4 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-akin-text-dark tracking-wider uppercase">Platform</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.platform.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-base hover:text-akin-cyan transition-colors">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-akin-text-dark tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.solutions.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-base hover:text-akin-cyan transition-colors">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-sm font-semibold text-akin-text-dark tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-base hover:text-akin-cyan transition-colors">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-sm font-semibold text-akin-text-dark tracking-wider uppercase">Insights</h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.insights.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-base hover:text-akin-cyan transition-colors">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-center">&copy; 2025 Akin Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
