import { motion } from 'motion/react';
import { ArrowRight, Shield, Users, Award, CheckCircle } from 'lucide-react';

export function JatayuHero() {
  const navigateTo = (page: string) => {
    window.location.hash = page;
  };

 

  const highlights = [
    'Full PF, ESI & Labour Law Compliance',
    'Verified & Trained Workforce',
    '24/7 Emergency Support',
    'Multi-Service Integration',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Overlay (subtle float animation) */}
      <div
        className="absolute inset-0 z-0 animate-float"
        style={{
backgroundImage: `url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&quot')`
,

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(244, 246, 250, 0.95) 0%,  rgba(221, 176, 66, 0.15) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="inline-block px-6 py-3 rounded-full"
            style={{
              background: 'var(--jatayu-surface)',
              boxShadow: 'var(--neu-shadow-lg)',
              color: 'var(--jatayu-accent-gold)',
            }}
          >
            <span className="text-sm tracking-wide">JATAYUU ENTERPRISES PVT LTD</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl tracking-tight px-4"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Wings of Strength.
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              style={{ color: 'var(--jatayu-accent-gold)', display: 'inline-block' }}
            >
              Hands of Skill.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto px-4"
            style={{ color: 'var(--jatayu-text-secondary)', lineHeight: 1.6 }}
          >
            Led by a young and ambitious team delivering manpower excellence, 
            facility management, and operational discipline across India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <motion.button
              onClick={() => navigateTo('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="neu-button px-8 py-4 rounded-full flex items-center gap-2 group"
              style={{
                background: 'var(--jatayu-accent-gold)',
                color: 'var(--jatayu-surface)',
                fontWeight: 600,
                boxShadow: 'var(--neu-shadow-lg)',
              }}
            >
              Get Started
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              onClick={() => navigateTo('about')}
              whileHover={{ translateY: -2 }}
              className="neu-button px-8 py-4 rounded-full"
              style={{
                background: 'var(--jatayu-surface)',
                color: 'var(--jatayu-text-primary)',
                fontWeight: 600,
                boxShadow: 'var(--neu-shadow-lg)',
              }}
            >
              Learn More
            </motion.button>
          </motion.div>

         

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto pt-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 justify-center sm:justify-start px-4"
              >
                <CheckCircle
                  size={20}
                  style={{ color: 'var(--jatayu-accent-gold)' }}
                />
                <span
                  className="text-sm"
                  style={{ color: 'var(--jatayu-text-primary)' }}
                >
                  {highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
