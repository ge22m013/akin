import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';

const capabilities = [
    { name: 'Unified Ontology', description: 'The "digital twin" that maps your entire business.', imageSeed: 'ontology' },
    { name: 'Open Architecture & Integration', description: 'Integrate everything. Build on what you have.', imageSeed: 'architecture' },
    { name: 'Bespoke AI Model Development', description: 'Custom models built on your Ontology.', imageSeed: 'model' },
    { name: 'Operational Deployment', description: 'Move from model to mission, from cloud to edge.', imageSeed: 'deploy' },
    { name: 'Security & Governance', description: 'Security and data lineage built-in, not bolted-on.', imageSeed: 'security' },
];

const PlatformPage: React.FC = () => {
    return (
        <div className="bg-white">
            <Hero
                breadcrumb="The Akin AI Platform"
                title="Your Unified AI Operating System"
                subtitle="The single platform to integrate your data, build your bespoke models, and deploy real-world AI operations."
            />

            {/* Core Concept: Ontology */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="pr-8">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            The Heart of Your AI: The Akin Unified Ontology
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                            The Akin Ontology is the operational layer for your entire organization. It is a living, digital twin that sits on top of your existing digital assets (datasets, models, ERPs) and connects them to their real-world counterparts—factories, equipment, customers, supply chains, and financial transactions.
                        </p>
                        <p className="mt-4 text-lg text-akin-text-light">
                            AI cannot operate on data stored in tables. It must understand context. The Ontology provides that context, connecting the semantic, kinetic, and dynamic elements of your business. It is the single source of truth that weaves your data and analytics directly into your daily decision-making.
                        </p>
                    </div>
                     <img src="https://picsum.photos/seed/digital-twin/800/600" alt="Digital Twin Concept" className="rounded-lg shadow-xl" />
                </div>
            </section>

            {/* Key Capabilities Section */}
            <section className="bg-gray-50 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Core Platform Capabilities
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-akin-text-light">
                            A holistic set of features designed to power your entire operation.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((capability) => (
                            <Card key={capability.name} className="flex flex-col">
                                <img src={`https://picsum.photos/seed/${capability.imageSeed}/500/300`} alt={capability.name} className="rounded-md mb-4" />
                                <h3 className="text-xl font-bold text-akin-text-dark">{capability.name}</h3>
                                <p className="mt-2 text-akin-text-light flex-grow">{capability.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlatformPage;
