import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Layers,
  UserCheck,
  Eye,
  CheckCircle,
  FileCheck,
  Target
} from 'lucide-react';

export function JatayuWhyUs() {
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

  const coreStrengths = [
    {
      icon: Layers,
      title: 'Multi-Service Solutions',
      description: 'Integrated facility, manpower, and technical services under one roof',
      image: 'https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBidXNpbmVzcyUyMHRlYW13b3JrfGVufDF8fHx8MTc2NDc2ODMwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: UserCheck,
      title: 'Verified Workforce',
      description: 'Background-checked, trained professionals you can trust',
      image: 'https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JrZm9yY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3NzE2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Eye,
      title: 'Strong Supervision',
      description: 'Advanced monitoring and on-ground supervision teams',
      image: 'https://images.unsplash.com/photo-1691328024236-55b85f698fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwdGVhbSUyMEluZGlhfGVufDF8fHx8MTc2NDc3MTYyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: CheckCircle,
      title: 'Reliable Operations',
      description: 'Consistent delivery with operational excellence',
      image: 'https://images.unsplash.com/photo-1724497397666-501fb232b7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjQ3NjgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: FileCheck,
      title: 'Full Compliance',
      description: 'Complete adherence to PF, ESI, and labour laws',
      image: 'https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGlhbmNlJTIwZG9jdW1lbnRzJTIwSW5kaWF8ZW58MXx8fHwxNzY0NzcxNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Target,
      title: 'Discipline-Driven Execution',
      description: 'Process-oriented approach ensuring quality outcomes',
      image: 'https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2NDc1ODY2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section
      id="why-jatayuu"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--jatayu-surface)' }}
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
              background: 'var(--jatayu-bg)',
              color: 'var(--jatayu-accent-gold)',
            }}
          >
            <span className="text-sm">Why Choose Us</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
            }}
          >
            Why{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>JATAYUU</span>
          </h2>
        </motion.div>

        {/* Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neu-card p-8 md:p-12 mb-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6" style={{ color: 'var(--jatayu-accent-gold)' }}>
              "
            </div>
            <blockquote
              className="text-2xl sm:text-3xl mb-6 leading-relaxed"
              style={{
                color: 'var(--jatayu-text-primary)',
                fontWeight: 500,
                fontStyle: 'italic',
              }}
            >
              This is more than business for us—
              it is our contribution to India's growth.
              A chance to serve you is a chance to grow, improve,
              and build something meaningful for the future.
            </blockquote>
            <div
              className="text-lg"
              style={{
                color: 'var(--jatayu-accent-gold)',
                fontWeight: 600,
              }}
            >
              — The Jatayuu Team
            </div>
          </div>
        </motion.div>

        {/* Core Strengths Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3
            className="text-3xl sm:text-4xl"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
            }}
          >
            Our Core{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>Strengths</span>
          </h3>
        </motion.div>

        {/* Core Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreStrengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="neu-card overflow-hidden neu-card-hover group relative"
              style={{ minHeight: '240px' }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${strength.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.90) 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'var(--jatayu-accent-gold)',
                    boxShadow: 'var(--neu-shadow-sm)',
                  }}
                >
                  <strength.icon
                    size={28}
                    style={{ color: 'var(--jatayu-surface)' }}
                  />
                </div>
                <h4
                  className="text-xl mb-3"
                  style={{
                    color: 'var(--jatayu-text-primary)',
                    fontWeight: 600,
                  }}
                >
                  {strength.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--jatayu-text-primary)' }}
              >
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center"
        >
          <button
            onClick={() => {
              window.location.hash = 'contact';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="neu-button px-8 py-4 rounded-full"
            style={{
              background: 'var(--jatayu-accent-gold)',
              color: 'var(--jatayu-surface)',
              fontWeight: 600,
            }}
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
