import React, { useState, useMemo } from 'react';
import Card from './Card';
import Button from './Button';

const pillars = [
  { id: 'tech', name: 'Technology', weight: 0.20 },
  { id: 'humanity', name: 'Humanity', weight: 0.15 },
  { id: 'results', name: 'Results', weight: 0.25 },
  { id: 'innovation', name: 'Innovation', weight: 0.20 },
  { id: 'valiant', name: 'Valiant', weight: 0.10 },
  { id: 'exceptional', name: 'Exceptional', weight: 0.10 },
];

const ThriveScoreCalculator: React.FC = () => {
  const [scores, setScores] = useState(
    pillars.reduce((acc, p) => ({ ...acc, [p.id]: 50 }), {})
  );

  const handleSliderChange = (id: string, value: string) => {
    setScores(prev => ({ ...prev, [id]: parseInt(value) }));
  };

  const overallScore = useMemo(() => {
    return pillars.reduce((total, p) => {
      // @ts-ignore
      return total + (scores[p.id] * p.weight);
    }, 0).toFixed(1);
  }, [scores]);

  return (
    <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                    Calculate Your Thrive Score
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-akin-text-light">
                    Adjust the sliders to estimate your organization's current standing across the six foundational pillars. See how your readiness for the future stacks up.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pillars.map(p => (
                    <div key={p.id}>
                        <label htmlFor={p.id} className="flex justify-between font-semibold text-akin-text-dark">
                            <span>{p.name}</span>
                            {/* @ts-ignore */}
                            <span className="text-akin-cyan">{scores[p.id]}</span>
                        </label>
                        <input
                            type="range"
                            id={p.id}
                            min="0"
                            max="100"
                            // @ts-ignore
                            value={scores[p.id]}
                            onChange={(e) => handleSliderChange(p.id, e.target.value)}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-akin-cyan"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <Card className="max-w-2xl mx-auto">
                    <p className="text-lg text-akin-text-light">Your Estimated</p>
                    <h3 className="text-6xl font-extrabold text-akin-cyan my-2">{overallScore}</h3>
                    <p className="font-semibold text-2xl text-akin-text-dark">Overall Thrive Score</p>
                    <p className="mt-6 text-akin-text-light">This score represents a snapshot of your organization's readiness. A higher score indicates a stronger foundation for sustainable growth and resilience. Ready to elevate your score?</p>
                    <Button to="/contact" className="mt-8">Co-Create and Raise Your Score</Button>
                </Card>
            </div>
        </div>
    </section>
  );
};

export default ThriveScoreCalculator;
