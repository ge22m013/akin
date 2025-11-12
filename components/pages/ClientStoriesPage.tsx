import React, { useState, useMemo } from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';

const allStories = [
  { id: 1, title: 'Reduced Supply Chain Costs by 15% with a Unified Logistics Ontology', industry: 'Logistics', capability: 'Unified Ontology', outcome: '15% cost reduction', client: 'Global Logistics Inc.' },
  { id: 2, title: 'Achieved 98% Prediction Accuracy in Manufacturing', industry: 'Manufacturing', capability: 'AI Model Development', outcome: '98% accuracy', client: 'Auto OEM Major' },
  { id: 3, title: 'Cut Downtime by 32% via Predictive Maintenance', industry: 'Manufacturing', capability: 'Operational Deployment', outcome: '32% less downtime', client: 'Auto OEM Major' },
  { id: 4, title: 'Improved Forecast Accuracy by 20% in Retail', industry: 'Logistics', capability: 'AI Model Development', outcome: '20% forecast improvement', client: 'Global Logistics Inc.' },
  { id: 5, title: 'Streamlined Compliance with an Open Architecture Platform', industry: 'Finance', capability: 'Open Architecture', outcome: '50% faster audits', client: 'Regional Bank' },
];

const industries = ['All', 'Logistics', 'Manufacturing', 'Finance'];
const capabilities = ['All', 'Unified Ontology', 'AI Model Development', 'Operational Deployment', 'Open Architecture'];

type FilterButtonProps = { filter: string, activeFilter: string, setFilter: (f: string) => void };
const FilterButton: React.FC<FilterButtonProps> = ({ filter, activeFilter, setFilter }) => (
    <button
        onClick={() => setFilter(filter)}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeFilter === filter ? 'bg-akin-text-dark text-white' : 'bg-gray-100 text-akin-text-dark hover:bg-gray-200'}`}
    >
        {filter}
    </button>
);

const ClientStoriesPage: React.FC = () => {
    const [activeIndustry, setActiveIndustry] = useState('All');
    const [activeCapability, setActiveCapability] = useState('All');

    const filteredStories = useMemo(() => {
        return allStories.filter(story => {
            const industryMatch = activeIndustry === 'All' || story.industry === activeIndustry;
            const capabilityMatch = activeCapability === 'All' || story.capability === activeCapability;
            return industryMatch && capabilityMatch;
        });
    }, [activeIndustry, activeCapability]);

    return (
        <div>
            <Hero
                title="Proof. Not Promises."
                subtitle='The "Client Stories" hub is the central repository for all proof. It is a filterable, interactive gallery, not a static list.'
            />

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h3 className="font-semibold mb-3 text-akin-text-dark">Industry</h3>
                        <div className="flex flex-wrap gap-2">
                            {industries.map(ind => <FilterButton key={ind} filter={ind} activeFilter={activeIndustry} setFilter={setActiveIndustry} />)}
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold mb-3 text-akin-text-dark">Platform Capability</h3>
                        <div className="flex flex-wrap gap-2">
                            {capabilities.map(cap => <FilterButton key={cap} filter={cap} activeFilter={activeCapability} setFilter={setActiveCapability} />)}
                        </div>
                    </div>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredStories.length > 0 ? (
                        filteredStories.map(story => (
                            <Card key={story.id} className="flex flex-col">
                                <img src={`https://picsum.photos/seed/story${story.id}/400/250`} alt={story.title} className="rounded-md mb-4" />
                                <div className="flex-grow">
                                    <div className="flex gap-2 mb-2">
                                        <span className="text-xs font-semibold uppercase px-2 py-1 bg-akin-cyan/20 text-akin-cyan rounded-full">{story.industry}</span>
                                        <span className="text-xs font-semibold uppercase px-2 py-1 bg-gray-200 text-akin-text-light rounded-full">{story.capability}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-akin-text-dark">{`How ${story.client} ${story.title}`}</h3>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-lg font-bold text-green-600">{story.outcome}</p>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <p className="md:col-span-2 lg:col-span-3 text-center text-akin-text-light">No stories match the selected filters.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ClientStoriesPage;