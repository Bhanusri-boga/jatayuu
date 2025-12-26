import './styles/globals.css';
import { useState, useEffect } from 'react';
import { JatayuHeader } from './components/jatayu/JatayuHeader';
import { JatayuFooter } from './components/jatayu/JatayuFooter';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { LicensesPage } from './pages/LicensesPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { motion, AnimatePresence } from 'motion/react';
import DownloadBrochureButton from './components/DownloadBrochureButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      
      // Smooth scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial page
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'licenses':
        return <LicensesPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ 
        background: 'var(--jatayu-bg)',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      <JatayuHeader />
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.98 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.4, 0, 0.2, 1],
            opacity: { duration: 0.3 }
          }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      <JatayuFooter />
      <DownloadBrochureButton />
    </div>
  );
}
