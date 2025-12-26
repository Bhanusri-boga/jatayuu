import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home,
  Warehouse,
  Building,
  HardHat,
  HeartPulse,
  ShoppingBag,
  Factory,
  School
} from 'lucide-react';

export function JatayuIndustries() {
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

  const industries = [
    {
      icon: Home,
      title: 'Gated Communities',
      description: 'Complete facility management for residential complexes',
      color: '#DDB042',
      image: 'https://images.unsplash.com/photo-1760089926186-4a7c69a4daff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHJlc2lkZW50aWFsJTIwY29tcGxleHxlbnwxfHx8fDE3NjQ3Njg0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Logistics',
      description: 'Specialized workforce and maintenance solutions',
      color: '#9CA3AF',
      image: 'https://images.unsplash.com/photo-1763951515641-12637c29d176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3Njg0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Building,
      title: 'Corporate Offices',
      description: 'Professional facility and manpower services',
      color: '#6B7280',
      image: 'https://images.unsplash.com/photo-1703745006226-98d4b948dc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3Njg0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: HardHat,
      title: 'Construction & Real Estate',
      description: 'On-site support and technical services',
      color: '#111827',
      image: 'https://images.unsplash.com/photo-1620562378651-e610bf63da00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwSW5kaWF8ZW58MXx8fHwxNzY0NzY4NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: HeartPulse,
      title: 'Hospitals & Healthcare',
      description: 'Hygienic and reliable facility management',
      color: '#DDB042',
      image: 'https://images.unsplash.com/photo-1710074213374-e68503a1b795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3Njg0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Commercial Spaces',
      description: 'Customer-focused facility operations',
      color: '#9CA3AF',
      image: 'https://images.unsplash.com/photo-1617461124664-ec0c37dac80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wcGluZyUyMEluZGlhfGVufDF8fHx8MTc2NDc2ODQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Factory,
      title: 'Industrial & Manufacturing',
      description: 'Skilled technical and maintenance teams',
      color: '#6B7280',
      image: 'https://images.unsplash.com/photo-1664435784961-405d28b4b2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwbWFudWZhY3R1cmluZyUyMEluZGlhfGVufDF8fHx8MTc2NDc2ODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: School,
      title: 'Residential & Institutional Spaces',
      description: 'Comprehensive campus management solutions',
      color: '#111827',
      image: 'https://images.unsplash.com/photo-1758292109543-a5c7f0c4cb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXMlMjBJbmRpYXxlbnwxfHx8fDE3NjQ3Njg0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section
      id="industries"
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
            <span className="text-sm">Industries We Serve</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
            }}
          >
            Serving Diverse{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>Sectors</span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--jatayu-text-secondary)' }}
          >
            From residential communities to industrial facilities, we deliver 
            specialized solutions across multiple industries with proven expertise.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="neu-card overflow-hidden neu-card-hover group relative"
              style={{ minHeight: '220px' }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${industry.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(244, 246, 250, 0.92) 0%, rgba(244, 246, 250, 0.88) 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: industry.color,
                    boxShadow: 'var(--neu-shadow-sm)',
                  }}
                >
                  <industry.icon
                    size={32}
                  style={{ color: 'var(--jatayu-surface)' }}
                />
              </div>
                <h3
                  className="text-lg mb-2"
                  style={{
                    color: 'var(--jatayu-text-primary)',
                    fontWeight: 600,
                  }}
                >
                  {industry.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'var(--jatayu-text-primary)' }}
                >
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="neu-card p-8 md:p-12 text-center"
        >
          <h3
            className="text-3xl mb-4"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 600,
            }}
          >
            Your Industry, Our Expertise
          </h3>
          <p
            className="text-lg mb-6 max-w-2xl mx-auto"
            style={{ color: 'var(--jatayu-text-secondary)' }}
          >
            No matter your sector, we bring tailored solutions and industry-specific 
            knowledge to deliver exceptional results.
          </p>
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
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
