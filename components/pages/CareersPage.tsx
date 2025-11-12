import React from 'react';
import Hero from '../ui/Hero';
import Button from '../ui/Button';

const CareersPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Join Our Team"
                title="Stop Maintaining. Start Building."
                subtitle="Join a dynamic community of technologists building the next generation of operational AI. At Akin, you won't just 'consult' or 'advise'—you will engineer, from the ground up."
            />

            <main className="py-20 md:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className="text-3xl font-extrabold text-akin-text-dark tracking-tight sm:text-4xl">
                    Engineer the Future of AI in Operations
                </h2>
                <p className="mt-6 text-lg text-akin-text-light">
                    We are always looking for passionate engineers and data scientists driven to solve the hardest problems and build systems that have a real-world impact. If you believe in our mission to move AI from experimentation to operation, and you are ready to build instead of just advise, we want to hear from you.
                </p>
                 <p className="mt-8 text-lg text-akin-text-light">
                    Please submit your resume and a brief introduction to our talent team:
                </p>
                <a 
                    href="mailto:vacancy@akintechnology.com" 
                    className="mt-4 inline-block text-2xl font-bold text-akin-cyan hover:underline"
                >
                    vacancy@akintechnology.com
                </a>
                 <div className="mt-12 border-t pt-8">
                    <h3 className="text-2xl font-bold text-akin-text-dark">What We Look For</h3>
                    <ul className="mt-4 text-left max-w-md mx-auto space-y-2 text-akin-text-light">
                        <li className="flex items-start"><span className="text-akin-cyan mr-2 mt-1">&#10140;</span> A passion for solving complex, real-world problems.</li>
                        <li className="flex items-start"><span className="text-akin-cyan mr-2 mt-1">&#10140;</span> A collaborative, product-focused mindset.</li>
                        <li className="flex items-start"><span className="text-akin-cyan mr-2 mt-1">&#10140;</span> Deep expertise in software engineering, data science, or AI/ML.</li>
                        <li className="flex items-start"><span className="text-akin-cyan mr-2 mt-1">&#10140;</span> The drive to build, not just consult.</li>
                    </ul>
                 </div>
            </main>
        </div>
    );
};

export default CareersPage;