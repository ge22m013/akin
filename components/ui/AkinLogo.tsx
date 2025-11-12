import React from 'react';

interface AkinLogoProps {
    className?: string;
}

const AkinLogo: React.FC<AkinLogoProps> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 140 40"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Akin Technology Logo"
        >
            <path
                d="M10 35 L25 5 L40 35 M10 35 L50 18"
                stroke="#00D7FF"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <text
                x="58"
                y="28"
                fontFamily="Inter, sans-serif"
                fontSize="24"
                fontWeight="bold"
                fill="currentColor"
            >
                Akin
            </text>
        </svg>
    );
};

export default AkinLogo;
