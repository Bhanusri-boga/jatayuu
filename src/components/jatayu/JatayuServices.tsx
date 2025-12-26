import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Users, 
  Paintbrush, 
  Wrench, 
  Shield,
  ChevronDown
} from 'lucide-react';

export function JatayuServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

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

  const services = [
    {
      icon: Building2,
      title: 'Facility Management',
      shortDesc: 'Comprehensive facility solutions for operational excellence',
      details: [
        'Comprehensive housekeeping & janitorial services',
        'Property operations management',
        'Waste management & sustainability',
        'Lobby & front office management',
        'Landscape & garden maintenance',
        'Parking & gate management'
      ],
      color: '#DDB042',
      image: 'https://images.unsplash.com/photo-1707242491883-86a76b40f317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGZhY2lsaXR5JTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NzY4Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Users,
      title: 'Manpower Services',
      shortDesc: 'Skilled and reliable workforce solutions',
      details: [
        'Housekeeping & facility staff',
        'Admin & office support personnel',
        'Drivers & field executives',
        'Warehouse & logistics workforce',
        'Skilled technicians (electrical, plumbing, AC, carpentry)'
      ],
      color: '#9CA3AF',
      image: 'https://images.unsplash.com/photo-1724497397666-501fb232b7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjQ3NjgyOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Paintbrush,
      title: 'Interiors & Space Planning',
      shortDesc: 'Complete interior and renovation solutions',
      details: [
        'Office & residential interior execution',
        'Renovation & civil works',
        'Electrical installation & painting',
        'False ceiling solutions',
        'Modular furniture & layout planning'
      ],
      color: '#6B7280',
      image: 'https://images.unsplash.com/photo-1746004082380-9f50baddd58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMEluZGlhfGVufDF8fHx8MTc2NDc2ODM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Wrench,
      title: 'Technical Maintenance',
      shortDesc: 'Expert technical support and emergency response',
      details: [
        'Electrical maintenance & repair',
        'Plumbing & carpentry services',
        'AC servicing & HVAC support',
        'Fire safety equipment handling',
        '24/7 emergency response team'
      ],
      color: '#111827',
      image: '/images/maintan.jpg',
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      shortDesc: 'Professional security and monitoring services',
      details: [
        'Trained security guards & supervisors',
        'Patrol teams & monitoring',
        'CCTV surveillance systems',
        'Event & emergency security',
        'Visitor management support',
        'Comprehensive site coverage'
      ],
      color: '#DDB042',
      image: 'https://images.unsplash.com/photo-1721972248711-c36ebcc6337c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwSW5kaWF8ZW58MXx8fHwxNzY0NzY4Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section
      id="services"
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
            <span className="text-sm">Our Services</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
            }}
          >
            Comprehensive{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>Solutions</span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--jatayu-text-secondary)' }}
          >
            End-to-end facility management, manpower, and technical services tailored 
            to meet your business needs with excellence and reliability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const isExpanded = expandedService === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="neu-card overflow-hidden neu-card-hover relative"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.88) 100%)',
                    }}
                  />
                </div>

                <div className="relative z-10 p-6">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: service.color,
                        boxShadow: 'var(--neu-shadow-sm)',
                      }}
                    >
                      <service.icon
                        size={28}
                        style={{ color: 'var(--jatayu-surface)' }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl mb-2"
                        style={{
                          color: 'var(--jatayu-text-primary)',
                          fontWeight: 600,
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: 'var(--jatayu-text-secondary)' }}
                      >
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300"
                    style={{
                      background: isExpanded ? 'var(--jatayu-bg)' : 'transparent',
                      color: 'var(--jatayu-accent-gold)',
                    }}
                  >
                    <span className="text-sm" style={{ fontWeight: 600 }}>
                      {isExpanded ? 'Show Less' : 'View Details'}
                    </span>
                    <ChevronDown
                      size={20}
                      className="transition-transform duration-300"
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-3 px-2">
                          {service.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-2"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ background: service.color }}
                              />
                              <span
                                className="text-sm"
                                style={{ color: 'var(--jatayu-text-secondary)' }}
                              >
                                {detail}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => {
              window.location.hash = 'contact';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="neu-button px-8 py-4 rounded-full inline-flex items-center gap-2"
            style={{
              background: 'var(--jatayu-accent-gold)',
              color: 'var(--jatayu-surface)',
              fontWeight: 600,
            }}
          >
            Request a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
