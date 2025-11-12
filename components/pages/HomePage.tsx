import React, { useRef } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Hero from '../ui/Hero';
import { CubeTransparentIcon, BeakerIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';
import TypingAnimation from '../ui/TypingAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';

const HomePage: React.FC = () => {
    const platformSectionRef = useRef(null);
    const { scrollYProgress: platformScroll } = useScroll({
        target: platformSectionRef,
        offset: ["start end", "end start"]
    });
    const platformImageY = useTransform(platformScroll, [0, 1], ["-20%", "20%"]);

  return (
    <div className="space-y-24 md:space-y-32 lg:space-y-40 overflow-x-hidden">
      
      <Hero
        title={
          <>
            The Future of Enterprise is Intelligent.
            <br />
            Know What's Next.
            <br />
            <span className="text-akin-cyan">
                <TypingAnimation text="Intelligence, Architected." />
            </span>
          </>
        }
        subtitle="We go beyond software. We co-create your business's cognitive core: a bespoke, AI powered tech platform architected with world class governance and compliance frameworks that anticipates needs, empowers your team, and transforms your vision into operational reality."
        showGlobe={true}
      >
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact">Book a Demo</Button>
            <Button to="/platform" primary={false} className="!text-white !border-white hover:!bg-white hover:!text-akin-text-dark">Explore the Platform</Button>
        </div>
      </Hero>

      {/* The Problem */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Your AI Potential is Trapped in Silos.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          <Card className="text-center">
            <CubeTransparentIcon className="h-12 w-12 mx-auto text-akin-cyan" />
            <h3 className="text-xl font-bold mb-2 mt-4">Siloed Data</h3>
            <p>Your data is fragmented across legacy ERPs, data lakes, and disconnected systems, making a unified view impossible.</p>
          </Card>
          <Card className="text-center">
            <BeakerIcon className="h-12 w-12 mx-auto text-akin-cyan" />
            <h3 className="text-xl font-bold mb-2 mt-4">Failed Experiments</h3>
            <p>Your data science 'proof-of-concepts' are stuck, failing to scale or integrate into live production environments.</p>
          </Card>
          <Card className="text-center">
            <PuzzlePieceIcon className="h-12 w-12 mx-auto text-akin-cyan" />
            <h3 className="text-xl font-bold mb-2 mt-4">Fragmented Tooling</h3>
            <p>Your 'AI platform' is just a collection of disconnected vendor tools, a cost center, not an operational asset.</p>
          </Card>
        </div>
      </section>

      {/* The Solution */}
       <section ref={platformSectionRef} className="bg-gray-50 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">The Akin AI Platform: Your Unified AI Operating System.</h2>
            <p className="mt-4 text-lg text-akin-text-light">
              One platform, built for you. We build on your existing architecture to create a single 'digital twin' of your organization, connecting data, models, and operations in a single, secure environment.
            </p>
            <Button to="/platform" className="mt-8">Explore the Platform</Button>
          </div>
          <div className="rounded-lg shadow-2xl">
             <motion.img 
                src="https://picsum.photos/seed/platform-ui/800/600" 
                alt="Akin Platform UI" 
                className="w-full"
                style={{ y: platformImageY }}
            />
          </div>
        </div>
      </section>


      {/* 5. Methodology Teaser */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">From Vision to VELOCITY: Our Bespoke Engineering Process.</h2>
        <p className="mt-4 text-lg text-akin-text-light max-w-2xl mx-auto">We do not consult, we <strong>build</strong>. Our 'VELOCITY' framework is a proven, end-to-end engineering discipline for delivering operational AI at scale.</p>
         <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 text-akin-text-dark font-semibold text-lg">
            <span>Vision & Strategy</span><span className="text-akin-cyan">&rarr;</span>
            <span>Engineering & Integration</span><span className="text-akin-cyan">&rarr;</span>
            <span>Logic & Modeling</span><span className="text-akin-cyan">&rarr;</span>
            <span>Operationalize & Deploy</span><span className="text-akin-cyan">&rarr;</span>
            <span>Collaborate & Evolve</span>
        </div>
        <Button to="/methodology" className="mt-10">Our Methodology</Button>
      </section>
      
      {/* 6. Proof in Action */}
      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">See the Platform in Action.</h2>
            <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
                <Card>
                    <span className="text-sm font-bold uppercase text-akin-cyan">Manufacturing</span>
                    <h3 className="text-xl font-bold mt-2">Problem: Unplanned factory downtime.</h3>
                    <p className="mt-2"><strong>Solution:</strong> Deployed predictive maintenance models on a unified 'Factory Floor' Ontology.</p>
                    <p className="mt-2 text-2xl font-bold text-green-600"><strong>Outcome:</strong> 28% reduction in equipment failure.</p>
                </Card>
                 <Card>
                    <span className="text-sm font-bold uppercase text-akin-cyan">Logistics</span>
                    <h3 className="text-xl font-bold mt-2">Problem: Siloed supply chain data.</h3>
                    <p className="mt-2"><strong>Solution:</strong> Integrated 30+ carrier/warehouse feeds into a single 'Inventory' Ontology.</p>
                    <p className="mt-2 text-2xl font-bold text-green-600"><strong>Outcome:</strong> 15% reduction in stockouts.</p>
                </Card>
            </div>
            <Button to="/client-stories" className="mt-12">View All Client Stories</Button>
        </div>
      </section>

      {/* 7. Authority Hub */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Insights on Real-World AI.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <Card>
                <span className="text-sm font-bold uppercase text-akin-cyan">Signature Report</span>
                <h3 className="text-xl font-bold my-2">The Thrive Index</h3>
                <p>An opinionated guide to the industry, benchmarking how companies are progressing on their AI journey.</p>
            </Card>
            <Card>
                <span className="text-sm font-bold uppercase text-akin-cyan">Featured Blog</span>
                <h3 className="text-xl font-bold my-2">3 Ways LLMs Fail in Production</h3>
                <p>A practical guide on how to fix common LLM issues when moving from prototype to live environments.</p>
            </Card>
            <Card>
                <span className="text-sm font-bold uppercase text-akin-cyan">Whitepaper</span>
                <h3 className="text-xl font-bold my-2">Beyond the Data Lake</h3>
                <p>Making the case for an Operational Ontology as the core of your modern data strategy.</p>
            </Card>
        </div>
        <Button to="/insights" className="mt-12">Explore All Insights</Button>
      </section>

      {/* 8. Final CTA */}
      <section className="bg-akin-dark-hero text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Ready to build your unified platform?</h2>
            <p className="mt-4 text-lg text-gray-300">
                Stop buying disconnected tools. Start building your operational advantage. Talk to one of our platform engineers today to blueprint your AI Operating System.
            </p>
             <div className="mt-10 flex justify-center gap-x-6">
                <Button to="/contact" className="!bg-akin-cyan !text-akin-text-dark hover:!bg-white">Talk to an Engineer</Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;