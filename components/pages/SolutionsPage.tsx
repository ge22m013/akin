import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';
import { Content } from '../../App';

const solutionsContent: Record<string, Content> = {
    'manufacturing': {
        id: 'manufacturing',
        category: 'Industry Solution',
        title: 'Bespoke AI Platform for Intelligent Manufacturing',
        content: `
            <p>Our bespoke operating system for manufacturing creates a unified 'digital twin' of your entire production lifecycle. We connect shop floor machinery, supply chain data, and quality control processes into a single, intelligent command center.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>Predictive Maintenance:</strong> Use AI to analyze sensor data and predict equipment failure before it happens, minimizing costly downtime.</li>
                <li><strong>Automated Quality Control:</strong> Deploy computer vision models to detect product defects in real-time on the production line.</li>
                <li><strong>Supply Chain Synchronization:</strong> Integrate supplier data and logistics to ensure your production schedule is always aligned with your material availability.</li>
            </ul>
        `
    },
    'logistics': {
        id: 'logistics',
        category: 'Industry Solution',
        title: 'AI-Powered Platform for a Resilient Supply Chain',
        content: `
            <p>In today's volatile market, a resilient supply chain is a critical competitive advantage. Our platform unifies data from carriers, warehouses, and suppliers to give you end-to-end visibility and predictive control.</p>
            <h3>Key Capabilities:</h3>
            <ul>
                <li><strong>AI-Driven Demand Forecasting:</strong> Go beyond historical data by analyzing market trends and external factors for hyper-accurate demand prediction.</li>
                <li><strong>Inventory Optimization:</strong> Maintain optimal stock levels across all locations to reduce carrying costs and eliminate stockouts.</li>
                <li><strong>Logistics Network Optimization:</strong> Use AI to identify the most efficient shipping routes and carrier choices in real-time.</li>
            </ul>
        `
    },
    // Add more content for other industries and functions...
};


const industries = [
    { name: 'Manufacturing', imageSeed: 'factory', id: 'manufacturing' },
    { name: 'Logistics & Supply Chain', imageSeed: 'logistics', id: 'logistics' },
    { name: 'Finance & Risk', imageSeed: 'finance', id: 'finance' },
    { name: 'Energy & Utilities', imageSeed: 'energy', id: 'energy' },
];

const functions = [
    { name: 'Predictive Maintenance', imageSeed: 'maintenance', id: 'maintenance' },
    { name: 'Demand Forecasting', imageSeed: 'forecasting', id: 'forecasting' },
    { name: 'Material Movement', imageSeed: 'movement', id: 'movement' },
    { name: 'Intelligent Automation', imageSeed: 'automation', id: 'automation' },
];

interface SolutionsPageProps {
    onSolutionClick: (solution: Content) => void;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ onSolutionClick }) => {
    
    const handleCardClick = (id: string) => {
        const content = solutionsContent[id] || {
            id,
            category: 'Solution',
            title: `Details for ${id}`,
            content: '<p>Detailed content for this solution is coming soon.</p>'
        };
        onSolutionClick(content);
    };

    return (
        <div>
            <Hero
                title="Solutions for Your Core Challenges"
                subtitle="Explore how our bespoke AI platforms address specific needs, segmented by industry and business function to help you find the most relevant content."
            />

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                {/* Block 1: Solutions by Industry */}
                <section>
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        Bespoke AI Platforms for Your Industry
                    </h2>
                    <p className="mt-4 text-lg text-akin-text-light">The primary path for executive decision-makers.</p>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {industries.map((industry) => (
                            <div key={industry.name} onClick={() => handleCardClick(industry.id)} className="cursor-pointer h-full">
                                <Card className="h-full">
                                    <img src={`https://picsum.photos/seed/${industry.imageSeed}/400/250`} alt={industry.name} className="rounded-md mb-4" />
                                    <h3 className="text-xl font-bold text-akin-text-dark">{industry.name}</h3>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Block 2: Solutions by Function */}
                <section>
                    <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        Solve Your Core Operational Challenges
                    </h2>
                    <p className="mt-4 text-lg text-akin-text-light">The primary path for functional or operational managers.</p>
                     <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {functions.map((func) => (
                             <div key={func.name} onClick={() => handleCardClick(func.id)} className="cursor-pointer h-full">
                                <Card className="h-full">
                                    <img src={`https://picsum.photos/seed/${func.imageSeed}/400/250`} alt={func.name} className="rounded-md mb-4" />
                                    <h3 className="text-xl font-bold text-akin-text-dark">{func.name}</h3>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default SolutionsPage;