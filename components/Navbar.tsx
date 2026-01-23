import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isDarkMode, onToggleTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-all h-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate(Page.Home)}
        >
          <div className="text-primary">
            <span className="material-symbols-outlined text-4xl">eco</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-[#111811] dark:text-white">CloverLeaf Group</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: 'Home', page: Page.Home },
            { label: 'CloverLeaf Funeral Services', page: Page.Funerals },
            { label: 'CloverLeaf Tombstones', page: Page.Tombstones },
            { label: 'Contact', page: Page.Contact },
          ].map((item) => (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                currentPage === item.page 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200"
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            onClick={() => onNavigate(Page.Contact)}
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-5 rounded-lg transition-all shadow-lg shadow-primary/30"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span>Contact Us</span>
          </button>
          <button className="md:hidden text-gray-700 dark:text-gray-200 p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;