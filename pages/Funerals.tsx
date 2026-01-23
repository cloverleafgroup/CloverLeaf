
import React from 'react';
import { SERVICES } from '../constants';

const Funerals: React.FC = () => {
  const steps = [
    { num: '1', title: 'First Call', desc: 'Contact us 24/7. Our compassionate team is always ready to bring your loved one into our care.' },
    { num: '2', title: 'Consultation', desc: 'We meet to discuss wishes, budget, and special requests to personalize the service.' },
    { num: '3', title: 'Arrangements', desc: 'Our team handles all logistics, paperwork, venue booking, and coordination.' },
    { num: '4', title: 'The Service', desc: 'We conduct the service with professionalism and care for a beautiful farewell.' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-6 py-20 lg:px-40 flex justify-center bg-surface-light dark:bg-surface-dark">
        <div className="max-w-[1200px] w-full flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Compassionate Care</span>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight dark:text-white">
              Honoring Lives with Dignity & Respect
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              At CloverLeaf, we understand that arranging a funeral is one of life's most difficult tasks. We are here to guide you with empathy through every step of the journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold h-12 px-8 rounded-lg shadow-lg">
                Talk to a Director
              </button>
              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-bold h-12 px-8 rounded-lg dark:text-white">
                Download Brochure
              </button>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" 
                alt="Funeral Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-light dark:bg-background-dark px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">CloverLeaf Funeral Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-8 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">{s.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-4 bg-white dark:bg-surface-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold dark:text-white mb-4">How the Process Works</h2>
            <p className="text-gray-600 dark:text-gray-400">Simple and clear steps so you can focus on family.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg shadow-primary/30">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Funerals;
