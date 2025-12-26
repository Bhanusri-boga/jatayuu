import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, FileCheck, Building2, CreditCard, Users, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function JatayuLicenses() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const licenses = [
    {
      icon: Users,
      title: 'Labour License',
      description: 'Fully licensed to employ and manage workforce under the relevant labour laws and regulations.',
      details: 'Ensures compliance with all employment standards and worker welfare regulations.',
    },
    {
      icon: Building2,
      title: 'Trade License',
      description: 'Authorized to conduct business operations with all necessary trade permissions and approvals.',
      details: 'Valid trade license for operating facility management and manpower services.',
    },
    {
      icon: Shield,
      title: 'PSARA License',
      description: 'Private Security Agency Regulation Act compliance for providing security services.',
      details: 'Certified under PSARA for recruiting, training, and deploying security personnel.',
    },
    {
      icon: CreditCard,
      title: 'GST Registration',
      description: 'Registered under the Goods and Services Tax framework for transparent taxation.',
      details: 'Complete GST compliance ensuring legal and transparent financial operations.',
    },
    {
      icon: FileCheck,
      title: 'Company Registration (MCA)',
      description: 'Officially registered with the Ministry of Corporate Affairs as a Private Limited Company.',
      details: 'Full corporate compliance with MCA regulations and corporate governance standards.',
    },
    {
      icon: Award,
      title: 'ESI Compliance',
      description: 'Employee State Insurance compliance ensuring comprehensive healthcare benefits for our workforce.',
      details: 'Committed to employee welfare with full ESI registration and compliance.',
    },
    {
      icon: CheckCircle2,
      title: 'EPFO Registration',
      description: "Registered with the Employees' Provident Fund Organisation ensuring retirement benefits for eligible employees.",
      details: 'Full EPFO compliance with regular contributions, filings, and employee benefit administration.',
    },
  ];

  return (
    <section
      id="licenses"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'var(--jatayu-bg)' }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1659869764315-dc3d188141fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGNvbXBsaWFuY2V8ZW58MXx8fHwxNzY0NzczMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Legal compliance background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(244, 246, 250, 0.97) 0%, rgba(244, 246, 250, 0.95) 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 neu-card"
            style={{
              background: 'var(--jatayu-surface)',
              boxShadow: 'var(--neu-shadow-sm)',
            }}
          >
            <Shield
              size={20}
              style={{ color: 'var(--jatayu-accent-gold)' }}
            />
            <span
              className="text-sm"
              style={{ color: 'var(--jatayu-accent-gold)' }}
            >
              Fully Licensed & Compliant
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Licenses &{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>Compliance</span>
          </h2>

          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            style={{
              color: 'var(--jatayu-text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Operating with full legal authorization and regulatory compliance. Your trusted partner
            with all necessary certifications and licenses.
          </p>
        </motion.div>

        {/* Licenses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {licenses.map((license, index) => {
            const Icon = license.icon;
            return (
              <motion.div
                key={license.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                }}
                className="group neu-card p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl"
                style={{
                  background: 'var(--jatayu-surface)',
                  boxShadow: 'var(--neu-shadow-md)',
                }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                  style={{
                    background: 'rgba(221, 176, 66, 0.1)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <Icon
                    size={28}
                    style={{ color: 'var(--jatayu-accent-gold)' }}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl mb-3"
                  style={{
                    color: 'var(--jatayu-text-primary)',
                    fontWeight: 600,
                  }}
                >
                  {license.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm sm:text-base mb-4"
                  style={{
                    color: 'var(--jatayu-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {license.description}
                </p>

                {/* Details */}
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--jatayu-accent-gold)' }}
                  />
                  <p
                    className="text-sm"
                    style={{
                      color: 'var(--jatayu-text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    {license.details}
                  </p>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="mt-6 pt-4"
                  style={{
                    borderTop: '1px solid rgba(221, 176, 66, 0.1)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm group-hover:text-[var(--jatayu-accent-gold)] transition-colors"
                      style={{
                        color: 'var(--jatayu-text-secondary)',
                        fontWeight: 500,
                      }}
                    >
                      Verified & Active
                    </span>
                    <CheckCircle2
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                      style={{ color: 'var(--jatayu-accent-gold)' }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 text-center neu-card p-8 sm:p-12 rounded-3xl"
          style={{
            background: 'var(--jatayu-surface)',
            boxShadow: 'var(--neu-shadow-lg)',
          }}
        >
          <div className="max-w-3xl mx-auto">
            <h3
              className="text-2xl sm:text-3xl mb-4"
              style={{
                color: 'var(--jatayu-text-primary)',
                fontWeight: 600,
              }}
            >
              Trust Through Compliance
            </h3>
            <p
              className="text-base sm:text-lg mb-8"
              style={{
                color: 'var(--jatayu-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              All our licenses and certifications are regularly renewed and maintained to ensure
              continuous compliance with regulatory standards. Partner with confidence knowing
              we operate with complete legal authorization.
            </p>

            <motion.button
              onClick={() => {
                window.location.hash = 'contact';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl transition-all duration-300 overflow-hidden relative group"
              style={{
                background: 'var(--jatayu-accent-gold)',
                color: 'var(--jatayu-surface)',
                fontWeight: 600,
                boxShadow: 'var(--neu-shadow-sm)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 40px rgba(221, 176, 66, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Request Documentation</span>
              <FileCheck size={20} className="relative z-10" />
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                initial={false}
                whileHover={{
                  scale: [0, 2],
                  opacity: [0.3, 0],
                  transition: { duration: 0.6 },
                }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
