import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function DownloadBrochureButton() {
  const fileUrl = '/docs/jatayu.pdf';

  

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
 
    // Trigger download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'jatayu-brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '32px',
        zIndex: 9999,
      }}
    >
      <motion.button
        type="button"
        onClick={handleClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        animate={{ boxShadow: ['0 4px 12px rgba(221,176,66,0.4)', '0 8px 20px rgba(221,176,66,0.6)'] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          borderRadius: '9999px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#ffffff',
          background: 'linear-gradient(135deg, #DDB042 0%, #E5C158 100%)',
          border: 'none',
          boxShadow: '0 8px 20px rgba(221,176,66,0.5)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        aria-label="Download Jatayu Brochure"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>Brochure</span>
      </motion.button>
    </motion.div>
  );
}
