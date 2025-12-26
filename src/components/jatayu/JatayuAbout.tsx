import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, CheckCircle } from 'lucide-react';

export function JatayuAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const missionPoints = [
    'Deliver high-quality manpower and facility services with consistency.',
    'Empower businesses with reliable operations and trained professionals.',
    'Build long-term partnerships based on trust, discipline, and performance.',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--jatayu-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              background: 'var(--jatayu-surface)',
              color: 'var(--jatayu-accent-gold)',
              boxShadow: 'var(--neu-shadow-sm)',
            }}
          >
            <span className="text-sm">About Us</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
            }}
          >
            Company{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>Overview</span>
          </h2>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card overflow-hidden mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/images/companyoverview.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(221, 176, 66, 0.15) 0%, rgba(17, 24, 39, 0.25) 100%)',
                  }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--jatayu-text-secondary)' }}>
                <p>
                  Jatayuu Private Limited is led by a young and ambitious team—graduates who chose 
                  <span style={{ color: 'var(--jatayu-text-primary)', fontWeight: 600 }}> courage over comfort</span> and 
                  <span style={{ color: 'var(--jatayu-text-primary)', fontWeight: 600 }}> purpose over popularity</span>. 
                  While many pursued traditional software careers, we dedicated ourselves to a different path: 
                  <span style={{ color: 'var(--jatayu-accent-gold)', fontWeight: 600 }}> infrastructure, manpower excellence, and operational discipline</span>.
                </p>
                <p>
                  India's growth depends not only on technology—it relies on 
                  <span style={{ color: 'var(--jatayu-text-primary)', fontWeight: 600 }}> the people who build, maintain, manage, and protect its spaces</span>.
                </p>
                <p>
                  We may be young, but our vision is strong: to transform the service sector with 
                  <span style={{ color: 'var(--jatayu-accent-gold)', fontWeight: 600 }}> modern thinking, world-class processes, reliable manpower, advanced supervision, and the discipline to execute work that many overlook</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="neu-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'var(--jatayu-accent-gold)',
                  boxShadow: 'var(--neu-shadow-sm)',
                }}
              >
                <Eye size={32} style={{ color: 'var(--jatayu-surface)' }} />
              </div>
              <h3
                className="text-3xl"
                style={{
                  color: 'var(--jatayu-text-primary)',
                  fontWeight: 700,
                }}
              >
                Our Vision
              </h3>
            </div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--jatayu-text-secondary)' }}
            >
              To become India's most trusted and integrated service provider delivering 
              <span style={{ color: 'var(--jatayu-accent-gold)', fontWeight: 600 }}> end-to-end manpower, facility, and infrastructure solutions</span>.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="neu-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'var(--jatayu-accent-gold)',
                  boxShadow: 'var(--neu-shadow-sm)',
                }}
              >
                <Target size={32} style={{ color: 'var(--jatayu-surface)' }} />
              </div>
              <h3
                className="text-3xl"
                style={{
                  color: 'var(--jatayu-text-primary)',
                  fontWeight: 700,
                }}
              >
                Our Mission
              </h3>
            </div>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={24}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--jatayu-accent-gold)' }}
                  />
                  <span
                    className="text-base"
                    style={{ color: 'var(--jatayu-text-secondary)' }}
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <button
            onClick={() => {
              window.location.hash = 'services';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="neu-button px-8 py-4 rounded-full"
            style={{
              background: 'var(--jatayu-accent-gold)',
              color: 'var(--jatayu-surface)',
              fontWeight: 600,
            }}
          >
            Explore Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
