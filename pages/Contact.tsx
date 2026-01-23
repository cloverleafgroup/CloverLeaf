
import React from 'react';
import { ADVISORS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-6 flex flex-col gap-10">
        <div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6 dark:text-white">Always Here When You Need Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Providing compassionate funeral care and lasting memorials for your loved ones. We are available 24/7 to support you.
          </p>
          <div className="inline-block py-2 px-4 bg-primary/5 border border-primary/20 rounded-lg">
             <span className="text-xs font-black text-primary uppercase tracking-widest">✓ CIPC Registered Company (Cloverleaf Trading Pty Ltd)</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-primary font-bold uppercase tracking-widest text-xs">Dedicated Advisors</h3>
          {ADVISORS.map((advisor) => (
            <div key={advisor.id} className="p-6 bg-white dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-white/5 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="relative">
                <img src={advisor.imageUrl} alt={advisor.name} className="w-20 h-20 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary border-2 border-white dark:border-surface-dark rounded-full"></div>
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h4 className="text-xl font-bold dark:text-white">{advisor.name}</h4>
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">{advisor.role}</p>
                <div className="flex gap-3">
                  <a 
                    href={advisor.name === 'Colin Pillay' ? 'tel:0720314923' : 'tel:0825154909'}
                    className="flex-1 h-9 bg-gray-100 dark:bg-white/5 rounded-lg text-xs font-bold dark:text-white flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">call</span> Call
                  </a>
                  <a 
                    href={advisor.name === 'Colin Pillay' ? 'https://wa.me/27720314923' : 'https://wa.me/27825154909'}
                    className="flex-1 h-9 bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-400 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h4 className="font-bold text-lg dark:text-white">Visit Our Showroom</h4>
              <p className="text-sm text-gray-500">156 Longcroft Drive, Longcroft, Phoenix, KwaZulu-Natal, South Africa</p>
            </div>
          </div>
          <div className="w-full h-40 bg-gray-200 dark:bg-white/5 rounded-xl overflow-hidden grayscale">
            <img src="https://picsum.photos/seed/map/800/200" className="w-full h-full object-cover opacity-50" alt="Map" />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5">
          <h2 className="text-2xl font-bold mb-2 dark:text-white">Professional Consultation</h2>
          <p className="text-sm text-gray-500 mb-8">Fill out the form below and a director will reach out shortly.</p>
          <form className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-sm font-bold dark:text-gray-300">Full Name</label>
              <input type="text" className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border-transparent focus:ring-primary focus:border-primary" placeholder="Jane Doe" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold dark:text-gray-300">Phone Number</label>
              <input type="tel" className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border-transparent focus:ring-primary focus:border-primary" placeholder="+27 (00) 000-0000" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold dark:text-gray-300">Inquiry Type</label>
              <select className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border-transparent focus:ring-primary focus:border-primary">
                <option>Immediate Need</option>
                <option>Pre-planning</option>
                <option>Tombstones & Memorials</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold dark:text-gray-300">Message</label>
              <textarea rows={4} className="w-full p-4 rounded-xl bg-gray-50 dark:bg-white/5 border-transparent focus:ring-primary focus:border-primary" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
              Request Consultation <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
