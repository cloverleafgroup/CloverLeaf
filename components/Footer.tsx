import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onStartLive: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onStartLive }) => {
  return (
    <footer className="w-full border-t border-gray-100 dark:border-white/10 bg-white dark:bg-surface-dark transition-colors py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">spa</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-text-main-light dark:text-white">CloverLeaf Group</h3>
            </div>
            {/* Typography Update: text-sm/base/lg adjusted for responsive scaling */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-[14px] md:text-[15px] lg:text-[16px]">
              Compassionate funeral care and lasting memorials. We are dedicated to honoring lives with dignity and supporting families through every step.
            </p>
            <p className="font-black uppercase tracking-[0.2em] text-primary text-[10px] md:text-[11px] lg:text-[12px]">
              ✓ CIPC Registered: Cloverleaf Trading Pty Ltd
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            {/* Typography Update: Headings increased */}
            <h4 className="font-bold uppercase tracking-wider mb-6 dark:text-white text-[14px] md:text-[15px] lg:text-[16px]">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => onNavigate(Page.Home)} className="text-left text-gray-600 hover:text-primary dark:text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate(Page.Funerals)} className="text-left text-gray-600 hover:text-primary dark:text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] transition-colors">CloverLeaf Funeral Services</button></li>
              <li><button onClick={() => onNavigate(Page.Tombstones)} className="text-left text-gray-600 hover:text-primary dark:text-gray-400 text-[14px] md:text-[15px] lg:text-[16px] transition-colors">CloverLeaf Tombstones</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase tracking-wider mb-6 dark:text-white text-[14px] md:text-[15px] lg:text-[16px]">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 text-gray-600 dark:text-gray-400 text-[14px] md:text-[15px] lg:text-[16px]">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <span className="leading-tight">156 Longcroft Drive, Longcroft, Phoenix, KwaZulu-Natal</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">phone</span>
                <span>072 031 4923</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <span>collin@cloverleafgroup.co.za</span>
              </li>
            </ul>
          </div>

          {/* Urgent Support */}
          <div className="lg:col-span-3">
            <div className="bg-primary/5 dark:bg-white/5 p-6 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </div>
                <p className="font-bold dark:text-white text-[14px] md:text-[15px] lg:text-[16px]">24/7 Urgent Assistance</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-[13px] md:text-[14px] lg:text-[15px]">
                Contact Colin Pillay: 072 031 4923
              </p>
              <button 
                onClick={onStartLive}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold h-11 rounded-lg transition-all text-[14px] md:text-[15px] lg:text-[16px]"
              >
                Connect to Counselor
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/10 text-center text-gray-500 text-[12px] md:text-[13px] lg:text-[14px]">
          © 2026 CloverLeaf Group. All rights reserved. CloverLeaf Funeral Services & Tombstones.
        </div>
      </div>
    </footer>
  );
};

export default Footer;