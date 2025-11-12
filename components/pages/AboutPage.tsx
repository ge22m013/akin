import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';
import { AcademicCapIcon, UserGroupIcon, RocketLaunchIcon, GlobeAltIcon, ScaleIcon, SparklesIcon, CubeTransparentIcon, HeartIcon, ArrowTrendingUpIcon, LightBulbIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import ThriveScoreCalculator from '../ui/ThriveScoreCalculator';

const values = [
    { name: 'Engineering Excellence', description: "We are engineers, not academics. We build robust, scalable, and secure systems for mission-critical operations.", icon: RocketLaunchIcon },
    { name: 'Deep Collaboration', description: "We are partners, not vendors. We work with our clients, embedding with your teams to build solutions that deliver lasting value.", icon: UserGroupIcon },
    { name: 'Operational Focus', description: "Our work is not done until the model is running, live, in your operation. We are defined by real-world impact, not by slide decks.", icon: GlobeAltIcon },
    { name: 'Passionate Community', description: "We are a dynamic community of technologists motivated by purpose. We believe diverse, inclusive teams build more resilient and responsible technology.", icon: SparklesIcon },
];

const thrivePillars = [
    { name: 'Technology', icon: CubeTransparentIcon },
    { name: 'Humanity', icon: HeartIcon },
    { name: 'Results', icon: ArrowTrendingUpIcon },
    { name: 'Innovation', icon: LightBulbIcon },
    { name: 'Valiant', icon: ShieldCheckIcon },
    { name: 'Exceptional', icon: StarIcon },
];

const AboutPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="About Akin"
                title="We build the AI platforms that power the world's most complex operations."
                subtitle="Akin Technology's mission is to move AI from the lab to the real world. We are engineers and data scientists who partner with industry-leading organizations to build bespoke, end-to-end AI operating systems."
            />

            <section className="py-20 md:py-32">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                           Our Story: Bridging the Operational Gap
                        </h2>
                        <p className="mt-6 text-lg text-akin-text-light">
                           Akin Technology was founded because we saw a critical gap between AI experimentation and real-world operations. Companies were drowning in data and investing millions in 'proof-of-concept' models, but their AI initiatives remained trapped in the lab. Their data was siloed. Their models could not scale.
                        </p>
                         <p className="mt-4 text-lg text-akin-text-light">
                           We created Akin to build the <strong>one thing</strong> missing: the unified, bespoke operating system to connect them. We are the engineers who take AI the "last mile" into production.
                        </p>
                    </div>
                     <img src="https://picsum.photos/seed/story-bridge/800/600" alt="Bridging a gap concept" className="rounded-lg shadow-xl" />
                </div>
            </section>

             <section className="bg-gray-50 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                            Our Values: The "How"
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-akin-text-light">
                            This section explains the culture that delivers on the mission.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {values.map((value) => (
                            <Card key={value.name}>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <value.icon className="h-10 w-10 text-akin-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-akin-text-dark">{value.name}</h3>
                                        <p className="mt-1 text-akin-text-light">{value.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
             </section>
             
             <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                        The Visionary
                    </h2>
                    <div className="mt-12 max-w-4xl mx-auto">
                        <Card className="text-left">
                           <img src="https://picsum.photos/seed/suren/200/200" alt="Suren Amarasekera" className="w-32 h-32 rounded-full mx-auto mb-6 ring-4 ring-akin-cyan p-1" />
                           <h3 className="text-2xl font-bold text-center text-akin-text-dark">Suren Amarasekera</h3>
                           <p className="text-center text-akin-text-light mb-6">Chairman & CEO, Akin Pte Ltd, Singapore</p>
                           <blockquote className="text-xl italic text-akin-text-dark border-l-4 border-akin-cyan pl-6">
                            "Technology succeeds only when it solves real human problems. That’s why Akin's platforms are built not just to manage operations, but to empower the people and relationships that drive measurable growth."
                           </blockquote>
                        </Card>
                    </div>

                    <div className="mt-20">
                         <h3 className="text-2xl font-bold text-akin-text-dark">The Thrive Framework</h3>
                        <p className="mt-2 text-lg text-akin-text-light">Together We Thrive.</p>
                        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-8 max-w-3xl mx-auto">
                            {thrivePillars.map(p => (
                                <div key={p.name} className="flex flex-col items-center text-center">
                                    <p.icon className="h-10 w-10 text-akin-cyan" />
                                    <p className="mt-2 font-semibold text-sm">{p.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
             </section>

             <ThriveScoreCalculator />
        </div>
    );
};

export default AboutPage;