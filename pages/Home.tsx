
import React from 'react';
import { Page } from '../types';
import { SERVICES } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onStartLive: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onStartLive }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80")' }}
          ></div>
        </div>
        
        <div className="relative z-20 max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-1.5 px-4 mb-8">
            <span className="material-symbols-outlined text-primary text-sm">spa</span>
            <span className="text-white text-xs font-semibold uppercase tracking-wider">Compassionate Care & Lasting Tributes</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] mb-6 tracking-tight max-w-4xl drop-shadow-lg">
            Another Leaf Has Fallen,<br/> Another Soul is Gone
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Providing dignified funerals and lasting tombstones to honor your loved ones with the respect and peace they truly deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate(Page.Funerals)}
              className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-base font-bold h-14 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(23,207,23,0.3)] transform hover:scale-105"
            >
              <span>View Our Services</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button 
              onClick={onStartLive}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-semibold h-14 px-10 rounded-xl transition-all"
            >
              <span className="material-symbols-outlined">support_agent</span>
              <span>Live Support</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 animate-bounce cursor-pointer">
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll Down</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white max-w-2xl">
              Compassionate Care & Lasting Memorials
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl leading-relaxed">
              We provide dignified support and comprehensive services to honor your loved ones with the respect they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="group p-8 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all">
                  Learn More
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;