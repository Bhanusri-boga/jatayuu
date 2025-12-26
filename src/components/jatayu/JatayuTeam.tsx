import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function JatayuTeam() {
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

  const leaders = [
    {
      name: 'Naveen Reddy Kasireddy',
      position: 'Managing Director',
      image: '/images/nav.jpeg',
      linkedin: 'https://www.linkedin.com/in/naveen-reddy-kasireddy-9787b233b/',
      email: 'services@jatayuu.com',
    },
    {
      name: 'Gowtham Raj Mamilla',
      position: 'Director of Operations & Legal Affairs',
      image: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2a03EKAQkXKVqWZ2_SFfu8KxtZTv-5Sq6TF4bi_Ps0=',
      linkedin: 'https://www.linkedin.com/in/gowtham-raj-mamilla-b4bb74392/',
      email: 'services@jatayuu.com',
    },
    {
      name: 'Deepak Machkuri',
      position: 'Director of Advisory & Strategy',
      image: '/images/deepak.jpeg',
      linkedin: 'https://www.linkedin.com/in/deepak-machkuri-795a78245/',
      email: 'services@jatayuu.com',
    },
    {
      name: 'Saikiran Reddy Kasireddy',
      position: 'Head of Finance, Branding & Digital Growth',
      image: '/images/saikiran.jpeg',
      linkedin: 'https://www.linkedin.com/in/saikiran-reddy-kasireddy-3625b0195/',
      email: 'services@jatayuu.com',
    },
    {
      name: 'Farazuddin Mohammed',
      position: 'Head of Sales',
      image: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2a03EKAQkXKVqWZ2_SFfu8KxtZTv-5Sq6TF4bi_Ps0=',
      linkedin: '#',
      email: 'services@jatayuu.com',
    },
  ];

  return (
    <section
      id="team"
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
            <span className="text-sm">Leadership</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
            }}
          >
            Meet Our{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>Leaders</span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--jatayu-text-secondary)' }}
          >
            A young, ambitious team of graduates who chose courage over comfort—
            dedicated to transforming the service sector with modern thinking and world-class execution.
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neu-card overflow-hidden neu-card-hover group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={leader.image}
                  alt={leader.name}
               className={
  "w-full  object-cover transition-transform duration-500 group-hover:scale-110 " 
    
}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, var(--jatayu-surface) 0%, transparent 60%)',
                  }}
                />
                
                {/* Social Links */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                  target='blank'
                    href={leader.linkedin}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'var(--jatayu-surface)',
                      boxShadow: 'var(--neu-shadow-sm)',
                    }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin
                      size={18}
                      style={{ color: 'var(--jatayu-accent-gold)' }}
                    />
                  </a>
                  <a
                  target='blank'
                    href={`mailto:${leader.email}`}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'var(--jatayu-surface)',
                      boxShadow: 'var(--neu-shadow-sm)',
                    }}
                    aria-label="Email"
                  >
                    <Mail
                      size={18}
                      style={{ color: 'var(--jatayu-accent-gold)' }}
                    />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{
                    color: 'var(--jatayu-text-primary)',
                    fontWeight: 600,
                  }}
                >
                  {leader.name}
                </h3>
                <div
                  className="text-sm"
                  style={{ color: 'var(--jatayu-accent-gold)' }}
                >
                  {leader.position}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="neu-card p-8 inline-block max-w-2xl">
            <h3
              className="text-2xl mb-4"
              style={{
                color: 'var(--jatayu-text-primary)',
                fontWeight: 600,
              }}
            >
              Join Our Growing Team
            </h3>
            <p
              className="text-base mb-6"
              style={{ color: 'var(--jatayu-text-secondary)' }}
            >
              We're looking for passionate individuals who want to be part of India's 
              service sector transformation. Join us in building something meaningful.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
