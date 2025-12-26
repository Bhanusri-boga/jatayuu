import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function JatayuHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'licenses', label: 'Licenses' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial active section
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (sectionId: string) => {
    window.location.hash = sectionId;
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'var(--jatayu-surface)' : 'transparent',
        boxShadow: isScrolled ? 'var(--neu-shadow-sm)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         <div className="flex items-center gap-1">
           <img
             src="/images/jatayulogo.png"
             alt="Jatayu Logo"
             className="h-10"
             style={{ width: '55px' }}
           />
           <img
             src="/images/logoname.png"
             alt="Jatayu Logo Name"
             className="h-6"
             style={{ width: '100px' }}
           />
         </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-200 inline-flex items-center justify-center ${isActive ? 'font-semibold' : 'font-medium hover:bg-[rgba(221,176,66,0.08)]'}`}
                  style={{
                    backgroundColor: isActive ? 'var(--jatayu-accent-gold, #DDB042)' : undefined,
                    color: isActive ? 'var(--jatayu-surface, #ffffff)' : undefined,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-2xl neu-button"
            style={{ background: 'var(--jatayu-surface)' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} style={{ color: 'var(--jatayu-text-primary)' }} />
            ) : (
              <Menu size={24} style={{ color: 'var(--jatayu-text-primary)' }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'var(--jatayu-surface)',
              boxShadow: 'var(--neu-shadow-md)',
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => navigateTo(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-2xl transition-colors duration-200 ${isActive ? 'font-semibold' : 'font-medium hover:bg-[rgba(221,176,66,0.06)]'}`}
                    style={{
                      backgroundColor: isActive ? 'var(--jatayu-accent-gold, #DDB042)' : undefined,
                      color: isActive ? 'var(--jatayu-surface, #ffffff)' : undefined,
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}