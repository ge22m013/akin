import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, children, primary = true, className = '' }) => {
  const baseClasses = "inline-block px-8 py-3 rounded-md font-semibold text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const primaryClasses = "bg-akin-text-dark text-white hover:bg-akin-cyan hover:text-white focus:ring-akin-cyan";
  const secondaryClasses = "bg-transparent text-akin-text-dark border-2 border-akin-text-dark hover:bg-gray-100 focus:ring-akin-text-dark";

  const appliedClasses = primary ? primaryClasses : secondaryClasses;

  return (
    <Link to={to} className={`${baseClasses} ${appliedClasses} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;