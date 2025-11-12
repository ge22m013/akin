import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';

const pillars = [
  { name: 'Technology', points: 100, items: ['Core Infrastructure & Platforms (25)', 'Intelligent Automation & AI Integration (45)', 'Cybersecurity & Digital Resilience (30)'] },
  { name: 'Humanity', points: 100, items: ['Holistic Well-being & Support (30)', 'DEIB & Empowered Culture (40)', 'Dynamic Talent Development (30)'] },
  { name: 'Results', points: 100, items: ['Financial Health & Profitability (50)', 'Market Position & Competitiveness (30)', 'Next-Gen Operational Efficiency (20)'] },
  { name: 'Innovation', points: 100, items: ['Innovation Engine & R&D (40)', 'Culture of Continuous Experimentation (30)', 'Strategic Adaptability & Agility (30)'] },
  { name: 'Valiant', points: 100, items: ['Clarity & Boldness of Vision (40)', 'Ethical Leadership & Governance (30)', 'Strategic Foresight & Risk-Taking (30)'] },
  { name: 'Exceptional', points: 100, items: ['Customer Experience & Loyalty (50)', 'Product/Service Quality & Excellence (30)', 'Brand Reputation & Ecosystem Impact (20)'] },
];

const ThriveIndexPage: React.FC = () => {
  return (
    <div>
        <Hero
            breadcrumb='Signature Content'
            title='The Thrive Index'
            subtitle='A comprehensive and detailed scoring framework designed to be a dynamic analysis tool. It breaks down the six foundational pillars of business readiness.'
        />

        <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                    Scoring Breakdown by Pillar
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-akin-text-light">
                    Each pillar is worth a total of 100 points, providing a deep, in-depth review of an organization's current capabilities and its readiness for future disruptions.
                </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pillars.map(pillar => (
                    <Card key={pillar.name} className="flex flex-col">
                        <h3 className="text-2xl font-bold text-akin-text-dark">{pillar.name}</h3>
                        <p className="font-semibold text-akin-cyan">{pillar.points} Points</p>
                        <ul className="mt-4 space-y-2 text-akin-text-light list-disc list-inside flex-grow">
                            {pillar.items.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </Card>
                ))}
            </div>

            <section className="mt-24 text-center bg-gray-50 p-12 rounded-lg">
                 <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                    How to Calculate the Overall Thrive Score
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-akin-text-light">
                    The final Thrive Score is a weighted sum of the six pillar scores. The weights can be adjusted to reflect the unique priorities of an organization or industry.
                </p>
                <div className="mt-8 bg-white p-6 rounded-md shadow-sm inline-block">
                    <h4 className="font-bold text-akin-text-dark mb-2">Example Weighting:</h4>
                    <p className="text-akin-text-light font-mono">
                        (Tech * 0.20) + (Humanity * 0.15) + (Results * 0.25) + (Innovation * 0.20) + (Valiant * 0.10) + (Exceptional * 0.10)
                    </p>
                </div>
            </section>
        </main>
    </div>
  );
};

export default ThriveIndexPage;
