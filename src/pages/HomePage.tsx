import { JatayuHero } from '../components/jatayu/JatayuHero';
import { motion } from 'motion/react';
import { 
  Building2, 
  Users, 
  Wrench, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Award,
  TrendingUp,
  Clock,
  Quote,
  Star,
  Briefcase,
  Home,
  Factory,
  Building,
  HeartPulse,
  ShoppingBag,
  HardHat
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Animation variants for consistent smooth animations
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Statistics Counter Component
function StatCounter({ end, duration = 2000, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{prefix}{count}{suffix}</span>;
}



// Services Overview Section
function ServicesOverviewSection() {
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

  const services = [
    {
      icon: Building2,
      title: 'Facility Management',
      description: 'Complete housekeeping, property operations, and maintenance services',
      features: ['Housekeeping Services', 'Property Management', 'Waste Management', 'Landscape Care'],
      image: 'https://images.unsplash.com/photo-1707242491883-86a76b40f317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGZhY2lsaXR5JTIwY2xlYW5pbmd8ZW58MXx8fHwxNzY0NzY4Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Users,
      title: 'Manpower Services',
      description: 'Skilled and verified workforce for diverse operational needs',
      features: ['Trained Personnel', 'Background Verified', 'Quick Deployment', 'Full Compliance'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      icon: Wrench,
      title: 'Technical Maintenance',
      description: 'Expert technical support with 24/7 emergency response teams',
      features: ['Electrical Services', 'Plumbing Solutions', 'AC & HVAC', 'Emergency Support'],
      image: '/images/maintan.jpg',
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Professional security guards and comprehensive monitoring systems',
      features: ['Trained Guards', 'CCTV Monitoring', 'Access Control', 'Patrol Teams'],
      image: 'https://images.unsplash.com/photo-1721972248711-c36ebcc6337c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwSW5kaWF8ZW58MXx8fHwxNzY0NzY4Mjk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--jatayu-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              background: 'var(--jatayu-bg)',
              color: 'var(--jatayu-accent-gold)',
            }}
          >
            <span className="text-sm">Our Expertise</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl mb-4"
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
            End-to-end facility management, manpower, and technical services designed 
            to elevate your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="neu-card overflow-hidden neu-card-hover group"
            >
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 md:h-auto">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(221, 176, 66, 0.25) 0%, rgba(17, 24, 39, 0.35) 100%)',
                      }}
                    />
                  </div>
                  <div className="absolute top-6 left-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'var(--jatayu-accent-gold)',
                        boxShadow: 'var(--neu-shadow-lg)',
                      }}
                    >
                      <service.icon size={32} style={{ color: 'var(--jatayu-surface)' }} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-8">
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      color: 'var(--jatayu-text-primary)',
                      fontWeight: 700,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: 'var(--jatayu-text-secondary)' }}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle
                          size={16}
                          style={{ color: 'var(--jatayu-accent-gold)' }}
                        />
                        <span style={{ color: 'var(--jatayu-text-primary)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              window.location.hash = 'services';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="neu-button px-8 py-4 rounded-full inline-flex items-center gap-2"
            style={{
              background: 'var(--jatayu-accent-gold)',
              color: 'var(--jatayu-surface)',
              fontWeight: 600,
            }}
          >
            View All Services
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Industries Section
function IndustriesSection() {
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
    { icon: Home, label: 'Gated Communities', color: '#DDB042' },
    { icon: Building, label: 'Corporate Offices', color: '#6B7280' },
    { icon: Factory, label: 'Manufacturing', color: '#DDB042' },
    { icon: HeartPulse, label: 'Healthcare', color: '#6B7280' },
    { icon: ShoppingBag, label: 'Retail Spaces', color: '#DDB042' },
    { icon: HardHat, label: 'Construction', color: '#6B7280' },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--jatayu-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl mb-4"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
            }}
          >
            Industries We{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>Serve</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--jatayu-text-secondary)' }}
          >
            Specialized solutions across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="neu-card p-6 text-center neu-card-hover group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: industry.color,
                  boxShadow: 'var(--neu-shadow-sm)',
                }}
              >
                <industry.icon size={28} style={{ color: 'var(--jatayu-surface)' }} />
              </div>
              <p
                className="text-xs"
                style={{
                  color: 'var(--jatayu-text-primary)',
                  fontWeight: 600,
                }}
              >
                {industry.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => {
              window.location.hash = 'industries';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="neu-button px-6 py-3 rounded-full text-sm"
            style={{
              background: 'var(--jatayu-bg)',
              color: 'var(--jatayu-accent-gold)',
              fontWeight: 600,
            }}
          >
            Explore All Industries
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
// function TestimonialsSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

  // const testimonials = [
    // {
    //   quote: "JATAYUU has transformed our facility management. Their attention to detail and professional workforce exceeded our expectations.",
    //   author: "Rajesh Kumar",
    //   position: "Operations Head",
    //   company: "Tech Park Bangalore",
    //   rating: 5,
    // },
    // {
    //   quote: "Reliable, professional, and always responsive. The best decision we made was partnering with JATAYUU for our manpower needs.",
    //   author: "Priya Sharma",
    //   position: "Facility Manager",
    //   company: "Corporate Plaza Mumbai",
    //   rating: 5,
    // },
    // {
    //   quote: "Their technical team's expertise and 24/7 support have been invaluable. True professionals who deliver on their promises.",
    //   author: "Amit Patel",
    //   position: "General Manager",
    //   company: "Industrial Hub Ahmedabad",
    //   rating: 5,
    // },
  // ];

  // return (
  //   <section
  //     ref={sectionRef}
  //     className="py-20 px-4 sm:px-6 lg:px-8"
  //     style={{ background: 'var(--jatayu-surface)' }}
  //   >
  //     <div className="max-w-7xl mx-auto">
  //       <motion.div
  //         initial={{ opacity: 0, y: 30 }}
  //         animate={isVisible ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.6 }}
  //         className="text-center mb-12"
  //       >
  //         <h2
  //           className="text-4xl sm:text-5xl mb-4"
  //           style={{
  //             color: 'var(--jatayu-text-primary)',
  //             fontWeight: 700,
  //           }}
  //         >
  //           Client{' '}
  //           <span style={{ color: 'var(--jatayu-accent-gold)' }}>Testimonials</span>
  //         </h2>
  //         <p
  //           className="text-lg max-w-2xl mx-auto"
  //           style={{ color: 'var(--jatayu-text-secondary)' }}
  //         >
  //           What our clients say about working with us
  //         </p>
  //       </motion.div>

  //       <div className="grid md:grid-cols-3 gap-6">
  //         {testimonials.map((testimonial, index) => (
  //           <motion.div
  //             key={index}
  //             initial={{ opacity: 0, y: 30 }}
  //             animate={isVisible ? { opacity: 1, y: 0 } : {}}
  //             transition={{ duration: 0.6, delay: index * 0.15 }}
  //             className="neu-card p-8 neu-card-hover"
  //           >
  //             <Quote
  //               size={40}
  //               style={{
  //                 color: 'var(--jatayu-accent-gold)',
  //                 opacity: 0.3,
  //                 marginBottom: '1rem',
  //               }}
  //             />
  //             <div className="flex gap-1 mb-4">
  //               {[...Array(testimonial.rating)].map((_, i) => (
  //                 <Star
  //                   key={i}
  //                   size={16}
  //                   fill="var(--jatayu-accent-gold)"
  //                   style={{ color: 'var(--jatayu-accent-gold)' }}
  //                 />
  //               ))}
  //             </div>
  //             <p
  //               className="text-base leading-relaxed mb-6"
  //               style={{ color: 'var(--jatayu-text-secondary)' }}
  //             >
  //               "{testimonial.quote}"
  //             </p>
  //             <div>
  //               <p
  //                 className="text-sm mb-1"
  //                 style={{
  //                   color: 'var(--jatayu-text-primary)',
  //                   fontWeight: 600,
  //                 }}
  //               >
  //                 {testimonial.author}
  //               </p>
  //               <p
  //                 className="text-xs"
  //                 style={{ color: 'var(--jatayu-text-secondary)' }}
  //               >
  //                 {testimonial.position}
  //               </p>
  //               <p
  //                 className="text-xs"
  //                 style={{ color: 'var(--jatayu-accent-gold)' }}
  //               >
  //                 {testimonial.company}
  //               </p>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
// }s

// Why Choose Us Section
function WhyChooseSection() {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--jatayu-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="neu-card overflow-hidden" style={{ height: '500px' }}>
              <div
                className="h-full"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1761818645928-47e5dad8ec76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMEluZGlhfGVufDF8fHx8MTc2NDc3MTgwNXww&ixlib=rb-4.1.0&q=80&w=1080')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="h-full flex items-end p-8"
                  style={{
                    background: 'linear-gradient(to top, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.2) 100%)',
                  }}
                >
                  <div>
                    <h3
                      className="text-3xl mb-2"
                      style={{
                        color: 'var(--jatayu-surface)',
                        fontWeight: 700,
                      }}
                    >
                      Excellence in Service
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--jatayu-surface)', opacity: 0.9 }}
                    >
                      Delivering quality through discipline and dedication
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                background: 'var(--jatayu-surface)',
                color: 'var(--jatayu-accent-gold)',
              }}
            >
              <span className="text-sm">Why Choose JATAYUU</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl mb-6"
              style={{
                color: 'var(--jatayu-text-primary)',
                fontWeight: 700,
              }}
            >
              Your Trusted{' '}
              <span style={{ color: 'var(--jatayu-accent-gold)' }}>Partner</span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: 'var(--jatayu-text-secondary)' }}
            >
              We bring together modern thinking, world-class processes, and disciplined execution 
              to deliver facility and manpower solutions that drive operational excellence.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Verified Workforce', desc: 'Background-checked professionals you can trust', link: null },
                { title: 'Fully Licensed', desc: 'All necessary licenses and regulatory compliance', link: 'licenses' },
                { title: '24/7 Support', desc: 'Round-the-clock assistance and emergency response', link: null },
             
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className={`flex items-start gap-3 ${item.link ? 'cursor-pointer group' : ''}`}
                  onClick={item.link ? () => {
                    window.location.hash = item.link;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } : undefined}
                >
                  <CheckCircle
                    size={24}
                    className="flex-shrink-0 mt-1"
                    style={{ color: 'var(--jatayu-accent-gold)' }}
                  />
                  <div>
                    <h4
                      className={`text-lg mb-1 ${item.link ? 'group-hover:text-[var(--jatayu-accent-gold)] transition-colors' : ''}`}
                      style={{
                        color: 'var(--jatayu-text-primary)',
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--jatayu-text-secondary)' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <button
                onClick={() => {
                  window.location.hash = 'services';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="neu-button px-8 py-4 rounded-full inline-flex items-center gap-2"
                style={{
                  background: 'var(--jatayu-accent-gold)',
                  color: 'var(--jatayu-surface)',
                  fontWeight: 600,
                }}
              >
                Learn More
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--jatayu-surface)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="neu-card overflow-hidden"
        >
          <div
            className="relative p-12 md:p-16"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjQ3NzE4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.92) 0%, rgba(17, 24, 39, 0.88) 100%)',
              }}
            />
            <div className="relative z-10 text-center">
              <h2
                className="text-3xl sm:text-5xl mb-6"
                style={{
                  color: 'var(--jatayu-surface)',
                  fontWeight: 700,
                }}
              >
                Ready to Transform Your{' '}
                <span style={{ color: 'var(--jatayu-accent-gold)' }}>
                  Operations?
                </span>
              </h2>
              <p
                className="text-lg mb-8 max-w-2xl mx-auto"
                style={{ color: 'var(--jatayu-surface)', opacity: 0.9 }}
              >
                Partner with JATAYUU ENTERPRISES for integrated facility management 
                and manpower solutions that elevate your business. Fully licensed and compliant.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
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
                  Get in Touch
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => {
                    window.location.hash = 'about';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="neu-button px-8 py-4 rounded-full"
                  style={{
                    background: 'var(--jatayu-surface)',
                    color: 'var(--jatayu-text-primary)',
                    fontWeight: 600,
                  }}
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div>
      <JatayuHero />
     
      <ServicesOverviewSection />
      <IndustriesSection />
      <WhyChooseSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
}
