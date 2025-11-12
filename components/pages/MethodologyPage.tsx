import React from 'react';
import Hero from '../ui/Hero';

const phases = [
  {
    name: 'Phase 1: Vision & Strategy',
    title: 'We partner with your executive and operational teams to define the problem.',
    description: 'We identify the "thin slice" with the highest business value, and design the target-state Unified Ontology.',
    deliverables: ['Ontology Blueprint', 'Value-Slice Roadmap', 'Technical Architecture Plan'],
  },
  {
    name: 'Phase 2: Engineering & Integration',
    title: 'Our engineers build the core data infrastructure.',
    description: 'This is the heavy lifting: integrating your disparate, legacy systems into the platform\'s open architecture and building the data pipelines that feed the Ontology.',
    deliverables: ['Deployed Data Pipelines', 'Integrated Data Sources', 'Governance Framework'],
  },
  {
    name: 'Phase 3: Logic & Modeling',
    title: 'With the Ontology in place, our data scientists develop and train bespoke AI/ML models.',
    description: 'This phase encodes your unique business logic to solve your specific challenges, from predictive maintenance to demand forecasting.',
    deliverables: ['Trained & Validated Custom Models', 'Ontology-Augmented LLM Agents'],
  },
  {
    name: 'Phase 4: Operationalize & Deploy',
    title: 'We deploy the full platform and models into your live environment.',
    description: 'Using our autonomous deployment framework, we establish continuous, reliable operations, with human-in-the-loop workflows for critical decisions.',
    deliverables: ['Live, Operational AI Platform', 'MLOps Pipelines'],
  },
  {
    name: 'Phase 5: Collaborate & Evolve',
    title: 'We adopt a "product mindset," not a "project mindset".',
    description: 'The platform is a living asset that constantly evolves. We work with your team to monitor, refine, and deploy new capabilities, ensuring the platform drives sustained, long-term value.',
    deliverables: ['Continuous Improvement Roadmap', 'Managed Services (DAMO)'],
  },
];

const MethodologyPage: React.FC = () => {
  return (
    <div>
        <Hero
            breadcrumb='The Akin "VELOCITY" Methodology'
            title='From Vision to VELOCITY'
            subtitle="Building a bespoke AI Operating System is not a consulting project; it is an engineering discipline. Our 'VELOCITY' methodology is a unified workflow that integrates strategy, engineering, and data science to deliver tangible, operational value at every stage."
        />

        <section className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="absolute left-1/2 -ml-0.5 w-1 bg-gray-200 h-full" aria-hidden="true"></div>
                    <div className="relative space-y-16">
                        {phases.map((phase, index) => (
                            <div key={phase.name} className="flex items-start">
                                 <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                                    {index % 2 === 0 && (
                                        <div>
                                            <p className="text-lg font-bold text-akin-cyan">{phase.name}</p>
                                            <h3 className="text-xl font-semibold mt-1 text-akin-text-dark">{phase.title}</h3>
                                            <p className="mt-2 text-akin-text-light">{phase.description}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="relative">
                                    <div className="h-8 w-8 rounded-full bg-akin-cyan flex items-center justify-center ring-8 ring-white z-10">
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </div>
                                </div>
                                 <div className={`flex-1 ${index % 2 !== 0 ? 'pl-8' : 'pr-8'}`}>
                                     {index % 2 !== 0 && (
                                        <div>
                                            <p className="text-lg font-bold text-akin-cyan">{phase.name}</p>
                                            <h3 className="text-xl font-semibold mt-1 text-akin-text-dark">{phase.title}</h3>
                                            <p className="mt-2 text-akin-text-light">{phase.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default MethodologyPage;
