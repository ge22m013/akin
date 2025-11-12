import React, { useState } from 'react';
import Hero from '../ui/Hero';

const ContactPage: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState('');

    const personalEmailDomains = ['gmail', 'yahoo', 'hotmail', 'outlook', 'aol', 'icloud', 'protonmail'];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const domain = email.substring(email.lastIndexOf('@') + 1);
        
        const isPersonal = personalEmailDomains.some(d => domain.toLowerCase().includes(d));

        if (isPersonal) {
            setEmailError('Please use a valid company email address. Personal emails are not accepted.');
            return;
        }

        setEmailError('');
        console.log("Form submitted with data:", Object.fromEntries(formData));
        setIsSubmitted(true);
    };

    return (
        <div>
            <Hero
                title="Talk to an Engineer"
                subtitle="Ready to blueprint your AI Operating System? Fill out the form below, and one of our platform engineers will be in touch to schedule a demo."
            />

            <main className="py-20 md:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
                    {isSubmitted ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-akin-text-dark">Thank You!</h2>
                            <p className="mt-2 text-akin-text-light">Your message has been received. Our team will get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-akin-text-dark">Full Name</label>
                                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akin-cyan focus:border-akin-cyan sm:text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-akin-text-dark">Company Email</label>
                                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akin-cyan focus:border-akin-cyan sm:text-sm" />
                                    {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-akin-text-dark">Company Name</label>
                                <input type="text" name="company" id="company" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akin-cyan focus:border-akin-cyan sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-akin-text-dark">Which best describes your role?</label>
                                <select id="role" name="role" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akin-cyan focus:border-akin-cyan sm:text-sm">
                                    <option value="" disabled selected>Select an option...</option>
                                    <option value="decision-maker">I am the final decision maker</option>
                                    <option value="influencer">I am a key influencer in the decision</option>
                                    <option value="researcher">I am researching solutions for my team</option>
                                    <option value="explorer">I am gathering initial information</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-akin-text-dark">How can we help?</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-akin-cyan focus:border-akin-cyan sm:text-sm"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-akin-text-dark hover:bg-akin-cyan hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-akin-cyan">
                                    Book a Demo
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
