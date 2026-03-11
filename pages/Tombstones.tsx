import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page, GalleryItem } from '../types';
import { CATEGORIES, GALLERY } from '../components/constants';

interface TombstonesProps {
  onNavigate: (page: Page) => void;
}

const Tombstones: React.FC<TombstonesProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const FILTER_LABELS: Record<string, string> = {
    all: 'All',
    headstone: 'Headstones',
    pebbles: 'Kerbs & Pebbles',
    slab: 'Granite Slabs',
    bespoke: 'Bespoke',
    estate: 'Estate & Double',
  };

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
      <section className="py-20 px-4 bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold dark:text-white">Our Gallery</h2>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {Object.keys(FILTER_LABELS).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    filter === f 
                      ? 'bg-primary text-white shadow-lg scale-105' 
                      : 'bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-primary/50'
                  }`}
                >
                  {FILTER_LABELS[f]}
                </button>
              ))}
            </div>
          </div>

          <div 
            key={filter} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredGallery.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group animate-reveal-item"
                style={{ 
                  animationDelay: `${index * 0.08}s`,
                  opacity: 0, // Handled by reveal animation
                }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-white/5 relative">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-300 dark:text-white/10">
                      <span className="material-symbols-outlined text-5xl">photo_camera</span>
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 dark:text-white/20">
                        {item.id.replace('TPCLT', 'TPCLT ')}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-black tracking-[0.2em] text-primary/60 uppercase mb-1">
                    {item.id.replace('TPCLT', 'TPCLT ')}
                  </p>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold dark:text-white">{item.title}</h3>
                    <span className="text-[10px] uppercase font-black tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  {item.description && <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>}
                  <button 
                    onClick={() => setSelectedItem(item)}
                    className="text-primary font-bold text-sm flex items-center gap-1 group/btn transition-all"
                  >
                    View Details
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
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
              <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">CONTACT COLIN PILLAY — DIRECTOR</h4>
              <p className="text-xl font-bold mb-1">Call/WhatsApp: 072 031 4923</p>
              <p className="text-sm text-gray-500 italic">Quotations & Professional Consultation</p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary transition-all">
              <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">CONTACT LEIGH REDDY</h4>
              <p className="text-xl font-bold mb-1">Call/WhatsApp: 082 515 4909</p>
              <p className="text-sm text-gray-500 italic">Professional Consultation</p>
            </div>
          </div>
        </div>
      </section>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black text-white rounded-full transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 bg-gray-100 dark:bg-black/20 flex items-center justify-center min-h-[300px]">
                  {selectedItem.imageUrl ? (
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      className="max-w-full max-h-[70vh] lg:max-h-[85vh] object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-4 p-12 text-gray-300 dark:text-white/10">
                      <span className="material-symbols-outlined text-7xl">photo_camera</span>
                      <p className="text-sm font-black tracking-[0.2em] uppercase text-gray-400 dark:text-white/20">
                        Image Coming Soon
                      </p>
                      <p className="text-xs text-gray-400 dark:text-white/20">
                        {selectedItem.id.replace('TPCLT', 'TPCLT ')}
                      </p>
                    </div>
                  )}
                </div>
                <div className="lg:w-1/3 p-8 flex flex-col justify-center">
                  <span className="text-xs font-black uppercase tracking-widest text-primary mb-2">
                    {selectedItem.category} Memorial
                  </span>
                  <h3 className="text-3xl font-black mb-4 dark:text-white">{selectedItem.title}</h3>
                  {selectedItem.description ? (
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-500 italic mb-8">
                      Premium granite memorial with custom engraving options.
                    </p>
                  )}
                  
                  <div className="space-y-4">
                    <button 
                      onClick={() => {
                        setSelectedItem(null);
                        onNavigate(Page.Contact);
                      }}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      Request a Quote
                      <span className="material-symbols-outlined">request_quote</span>
                    </button>
                    <p className="text-[10px] text-center text-gray-400 uppercase tracking-tighter">
                      CIPC Registered: Cloverleaf Trading Pty Ltd
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tombstones;