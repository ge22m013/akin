import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Hero from '../ui/Hero';
import { Content } from '../../App';

const allInsights: (Content & { type: string, topic: string, isFeatured?: boolean, href?: string })[] = [
  { id: 'thrive-index', title: "The Akin Thrive Index", type: "Report", topic: "AI Maturity", isFeatured: true, href: "/insights/thrive-index", category: 'Signature Content', content: '<p>Our new signature content asset, The Thrive Index, is an opinionated guide to the industry, benchmarking how companies are progressing on their journey to thrive alongside technological advancement. It provides a comprehensive scoring framework across six foundational pillars of business readiness.</p>' },
  { id: 'llm-fail', title: "3 Ways LLMs Fail in Production (and How to Fix Them)", type: "Blog", topic: "MLOps", category: 'Featured Blog', content: `
    <p>Large Language Models (LLMs) show incredible promise in prototypes, but moving them to a live, operational environment reveals a unique set of challenges. This practical guide explores the three most common failure points and provides actionable engineering solutions to overcome them.</p>
    <h3>1. Context Limitations & Hallucinations</h3>
    <p>LLMs have a finite context window. When asked about information outside their training data or recent conversation history, they can 'hallucinate' or provide incorrect answers. We demonstrate how to implement a Retrieval-Augmented Generation (RAG) pipeline, connecting your LLM to a real-time, proprietary knowledge base (like a Unified Ontology) to provide grounded, accurate, and contextually-aware responses.</p>
    <h3>2. Data & Concept Drift</h3>
    <p>The world changes, but a statically trained model does not. Models trained on historical data degrade in performance over time as real-world data distributions and concepts shift. We outline a robust MLOps framework for continuous monitoring, automated drift detection, and streamlined retraining pipelines to ensure your models remain accurate and relevant.</p>
    <h3>3. Scaling & Integration Challenges</h3>
    <p>An LLM in a Jupyter notebook is not an enterprise-grade service. We detail the architectural patterns required for production deployment, including API gateway design, load balancing for handling concurrent requests, security best practices for data in transit, and integration strategies for embedding the LLM into your existing operational workflows.</p>
    ` },
  { id: 'data-lake', title: "Beyond the Data Lake: The Case for an Operational Ontology", type: "Whitepaper", topic: "Data Ontology", category: 'Whitepaper', content: `
    <p>For years, the data lake has been the centerpiece of enterprise data strategy—a vast repository for raw data. However, data lakes have a fundamental flaw: they store data without context, making it inert and difficult to operationalize. This whitepaper argues for a paradigm shift: moving beyond passive storage to an active, intelligent data layer.</p>
    <h3>The Problem with 'Dumb' Data</h3>
    <p>Data lakes often become data swamps. Without a semantic layer that describes what the data is, how it relates to other data, and how it maps to real-world business objects, its value remains locked. Analytics are slow, AI models struggle for context, and a unified view of the business is impossible.</p>
    <h3>The Solution: An Operational Ontology</h3>
    <p>An Operational Ontology is a living, digital twin of your entire organization. It maps your siloed data sources (ERPs, data lakes, SCADA systems) to a common, logical model of your business—your factories, supply chains, customers, and equipment. It's the 'connective tissue' that gives your data meaning and makes it actionable.</p>
    <h3>Benefits of the Ontological Approach:</h3>
    <ul>
        <li><strong>Data in Context:</strong> AI models can now query and reason over data based on its business context, not just its location in a table.</li>
        <li><strong>Increased Agility:</strong> Easily add new data sources without breaking existing analytics or models.</li>
        <li><strong>Single Source of Truth:</strong> Create a reliable, unified view of your operations for better, faster decision-making.</li>
    </ul>
    ` },
  { id: 'mes-scada', title: "How a Unified Ontology Solves the MES/SCADA Integration Problem", type: "Blog", topic: "Data Ontology", category: 'Blog', content: `
    <p>Manufacturing floors are powered by a complex web of legacy systems like Manufacturing Execution Systems (MES) and Supervisory Control and Data Acquisition (SCADA). While critical, these systems create impenetrable data silos, preventing a holistic view of production. The conventional solution—rip-and-replace—is costly, risky, and disruptive.</p>
    <h3>The Integration Challenge</h3>
    <p>MES/SCADA systems use proprietary protocols and data formats. Integrating them to understand the end-to-end production lifecycle, from raw material intake to finished product, is a massive engineering challenge.</p>
    <h3>The Semantic Layer Solution</h3>
    <p>A Unified Ontology provides a non-invasive solution. It acts as a semantic abstraction layer that sits on top of your existing systems. Instead of replacing them, we map their disparate data points to a standardized, logical model of your factory floor. A 'sensor reading' from a SCADA system is mapped to a specific 'machine' in the ontology, which is part of a 'production line' that produces a 'product'.</p>
    <p>This approach unifies your data without altering the underlying systems, enabling powerful new capabilities like cross-system analytics, predictive maintenance, and real-time quality control.</p>
    ` },
  { id: 'supply-chain-2025', title: "2025 State of AI in Supply Chain", type: "Report", topic: "Supply Chain", category: 'Report', content: `
    <p>This in-depth report, based on a survey of 500 supply chain leaders from Fortune 1000 companies, benchmarks the adoption, challenges, and future trends of AI in logistics and supply chain management.</p>
    <h3>Key Findings:</h3>
    <ul>
        <li><strong>AI Adoption is Accelerating:</strong> 72% of organizations have moved beyond pilot projects and have at least one AI application in production within their supply chain, up from 45% in our 2023 report.</li>
        <li><strong>Top Use Cases:</strong> The most mature applications are in AI-driven demand forecasting (65% adoption) and logistics network optimization (58%). Predictive inventory management is the fastest-growing emerging area.</li>
        <li><strong>The Biggest Barrier Remains Data:</strong> Despite progress, 68% of respondents cited 'data fragmentation and quality' as the primary obstacle to scaling AI initiatives. This highlights the critical need for unified data platforms.</li>
        <li><strong>Investment Priorities for 2025:</strong> The top investment priorities for the next 18 months are 'Building a Unified Data Ontology' (45% of respondents) and 'Real-Time, End-to-End Visibility' (42%).</li>
    </ul>
    <p>The report provides detailed analysis and data visualizations to help you benchmark your organization against the industry and inform your strategic roadmap.</p>
    ` },
  { id: 'roi-ontology', title: "The ROI of a Unified Data Ontology: A B2B Framework", type: "Whitepaper", topic: "AI Maturity", category: 'Whitepaper', content: `
    <p>Justifying investment in foundational data architecture can be challenging. Unlike a specific application, the benefits of a Unified Data Ontology are systemic and cross-functional. This whitepaper provides a comprehensive, step-by-step framework for building a compelling business case and calculating the tangible ROI of this strategic investment.</p>
    <h3>Quantifying the Value:</h3>
    <p>We break down the ROI calculation into three core areas, providing formulas and industry benchmarks for each:</p>
    <ol>
        <li><strong>Operational Efficiency Gains:</strong>
            <ul>
                <li>Reduction in time spent by data scientists and analysts on data discovery and preparation (avg. 40-60% reduction).</li>
                <li>Automation of manual reporting processes.</li>
                <li>Faster root cause analysis for operational disruptions.</li>
            </ul>
        </li>
        <li><strong>Improved Decision Velocity & Quality:</strong>
            <ul>
                <li>Value of accelerated strategic and operational decisions.</li>
                <li>Reduction in errors caused by inconsistent or siloed data.</li>
                <li>Quantifying the impact of improved forecast accuracy on inventory costs and stockouts.</li>
            </ul>
        </li>
        <li><strong>Enablement of New Capabilities:</strong>
            <ul>
                <li>Calculating the value of new AI/ML applications (e.g., predictive maintenance, fraud detection) that are only possible with a unified data foundation.</li>
                <li>Modeling the revenue impact of increased business agility and faster time-to-market for new products or services.</li>
            </ul>
        </li>
    </ol>
    <p>Use this framework to build a data-driven business case that clearly articulates the strategic and financial value of moving beyond data silos to an intelligent, unified data ontology.</p>
    ` },
];


const topics = ["All", "AI Maturity", "Data Ontology", "MLOps", "Supply Chain"];
const types = ["All", "Blog", "Report", "Whitepaper"];

interface InsightsPageProps {
  onInsightClick: (insight: Content) => void;
}

const InsightsPage: React.FC<InsightsPageProps> = ({ onInsightClick }) => {
    const [activeTopic, setActiveTopic] = useState('All');
    const [activeType, setActiveType] = useState('All');

    const filteredInsights = useMemo(() => {
        return allInsights.filter(insight => {
            if (insight.isFeatured) return false;
            const topicMatch = activeTopic === 'All' || insight.topic === activeTopic;
            const typeMatch = activeType === 'All' || insight.type === activeType;
            return topicMatch && typeMatch;
        });
    }, [activeTopic, activeType]);
    
    const featuredInsight = allInsights.find(i => i.isFeatured);
    
    const FilterButton: React.FC<{ filter: string, activeFilter: string, setFilter: (f: string) => void }> = ({ filter, activeFilter, setFilter }) => (
        <button
            onClick={() => setFilter(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeFilter === filter ? 'bg-akin-text-dark text-white' : 'bg-gray-100 text-akin-text-dark hover:bg-gray-200'}`}
        >
            {filter}
        </button>
    );

    return (
        <div>
            <Hero
                title="Akin Insights Hub"
                subtitle="A central hub for all thought leadership, designed to build authority, drive top-of-funnel SEO, and capture mid-funnel leads."
            />
            
            {featuredInsight && (
                <section className="py-20 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <img src="https://picsum.photos/seed/thrive-index/800/600" alt="Thrive Index" className="rounded-lg shadow-xl" />
                        <div>
                            <p className="text-base font-semibold text-akin-cyan uppercase tracking-wide">{featuredInsight.category}</p>
                            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-akin-text-dark tracking-tight">{featuredInsight.title}</h2>
                            <div className="mt-4 text-lg text-akin-text-light" dangerouslySetInnerHTML={{ __html: featuredInsight.content }} />
                            <Button to={featuredInsight.href || '#'} className="mt-8">Explore the Index</Button>
                        </div>
                    </div>
                </section>
            )}

            <main className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h3 className="font-semibold mb-3 text-akin-text-dark">Filter by Topic</h3>
                        <div className="flex flex-wrap gap-2">
                            {topics.map(topic => <FilterButton key={topic} filter={topic} activeFilter={activeTopic} setFilter={setActiveTopic} />)}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3 text-akin-text-dark">Filter by Content Type</h3>
                        <div className="flex flex-wrap gap-2">
                            {types.map(type => <FilterButton key={type} filter={type} activeFilter={activeType} setFilter={setActiveType} />)}
                        </div>
                    </div>
                </div>

                 <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredInsights.length > 0 ? (
                        filteredInsights.map(insight => (
                             <Card key={insight.id} className="flex flex-col">
                                <div className="flex-grow">
                                    <div className="flex gap-2 mb-2">
                                         <span className="text-xs font-semibold uppercase px-2 py-1 bg-akin-cyan/20 text-akin-cyan rounded-full">{insight.type}</span>
                                        <span className="text-xs font-semibold uppercase px-2 py-1 bg-gray-200 text-akin-text-light rounded-full">{insight.topic}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-akin-text-dark">{insight.title}</h3>
                                </div>
                                <button onClick={() => onInsightClick(insight)} className="mt-4 pt-4 border-t border-gray-200 font-semibold text-akin-cyan hover:text-akin-text-dark text-left">Read More &rarr;</button>
                            </Card>
                        ))
                    ) : (
                        <p className="md:col-span-2 lg:col-span-3 text-center text-akin-text-light">No insights match the selected filters.</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default InsightsPage;