
import React, { useState } from 'react';
import { Page } from '../types';
import { CATEGORIES, GALLERY } from '../constants';

interface TombstonesProps {
  onNavigate: (page: Page) => void;
}

const Tombstones: React.FC<TombstonesProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');

  const filteredGallery = filter === 'all' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === filter);

  return (
    <div className="w-full">
      {/* Hero */}
      <section 
        className="h-[400px] flex flex-col items-center justify-center bg-cover bg-center text-white text-center p-8"
        style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80")' }}
      >
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Honouring Memories in Granite</h1>
        <p className="max-w-2xl text-lg opacity-90 mb-8">We provide high-quality granite memorials crafted with care to ensure a lasting tribute.</p>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-medium max-w-xl">
            All tombstones are custom-quoted based on your specific requirements, installation location, and design preferences. Contact our director, <span className="text-primary font-bold">Colin Pillay</span>, for a professional consultation and personalized quote.
          </p>
          <button 
            onClick={() => onNavigate(Page.Contact)}
            className="bg-primary hover:bg-primary-dark text-white font-bold h-12 px-10 rounded-lg shadow-xl mt-4"
          >
            Get a Custom Quote
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
           <h2 className="text-3xl font-bold dark:text-white">Memorial Categories</h2>
           <span className="text-xs bg-primary/10 text-primary font-black px-3 py-1 rounded-full border border-primary/20">✓ CIPC Registered Company (Cloverleaf Trading Pty Ltd)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="p-6 bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-xl hover:border-primary transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary mb-4 transition-colors">
                {cat.icon}
              </span>
              <h3 className="font-bold mb-2 dark:text-white">{cat.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold dark:text-white">Our Gallery</h2>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {['all', 'single', 'double', 'child', 'plaque'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === f 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item) => (
              <div key={item.id} className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                  <button className="text-primary font-bold text-sm hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-24 px-4 bg-surface-dark text-white border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Ready to Honor Your Loved One?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Contact our team for a personalized quote and professional consultation. We'll guide you through design options, installation requirements, and pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary transition-all">
              <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">[Contact Colin Pillay – Director]</h4>
              <p className="text-xl font-bold mb-1">Call/WhatsApp: 072 031 4923</p>
              <p className="text-sm text-gray-500 italic">Quotations & Professional Consultation</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary transition-all">
              <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">[Contact Leigh Reddy]</h4>
              <p className="text-xl font-bold mb-1">Call/WhatsApp: 082 515 4909</p>
              <p className="text-sm text-gray-500 italic">Professional Consultation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tombstones;