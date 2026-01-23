
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Funerals from './pages/Funerals';
import Tombstones from './pages/Tombstones';
import Contact from './pages/Contact';
import LiveSupport from './components/LiveSupport';
import CloverParticles from './components/CloverParticles';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [showLiveSupport, setShowLiveSupport] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} onStartLive={() => setShowLiveSupport(true)} />;
      case Page.Funerals: return <Funerals />;
      case Page.Tombstones: return <Tombstones onNavigate={setCurrentPage} />;
      case Page.Contact: return <Contact />;
      default: return <Home onNavigate={setCurrentPage} onStartLive={() => setShowLiveSupport(true)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <CloverParticles />
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <main className="flex-grow pt-20 relative z-10">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} onStartLive={() => setShowLiveSupport(true)} />
      
      {showLiveSupport && <LiveSupport onClose={() => setShowLiveSupport(false)} />}
    </div>
  );
};

export default App;
