import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Globe, Send } from 'lucide-react';

export function JatayuContact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const payload = {
        access_key: '8823d465-063d-4d5b-b287-8015a4335e5f',
        subject: formData.subject || 'New message from website',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        botcheck: '' // honeypot field
      } as Record<string, string>;

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.success) {
        setStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: json.message || 'Submission failed. Please try again later.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Submission failed. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 94928 68855',
      href: 'tel:+919492868855',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Services@jatayuu.com',
      href: 'mailto:Services@jatayuu.com',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.jatayuu.com',
      href: 'https://www.jatayuu.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Flat 206, Block A, INDIS VB City, Railway Employees Colony, Bolarum, Hyderabad, Telangana – 500010',
      href: 'https://maps.google.com/?q=Flat+206+Block+A+INDIS+VB+City+Bolarum+Hyderabad',
    },
  ];

  return (
    <section
      id="contact"
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
            <span className="text-sm">Contact Us</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl mb-6"
            style={{
              color: 'var(--jatayu-text-primary)',
              fontWeight: 700,
            }}
          >
            Get In{' '}
            <span style={{ color: 'var(--jatayu-accent-gold)' }}>Touch</span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: 'var(--jatayu-text-secondary)' }}
          >
            Ready to transform your facility operations? Reach out to us and let's 
            discuss how we can serve your business needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'Website' || item.label === 'Address' ? '_blank' : undefined}
                rel={item.label === 'Website' || item.label === 'Address' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="neu-card p-6 flex items-start gap-4 neu-card-hover group block"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'var(--jatayu-accent-gold)',
                    boxShadow: 'var(--neu-shadow-sm)',
                  }}
                >
                  <item.icon
                    size={28}
                    style={{ color: 'var(--jatayu-surface)' }}
                  />
                </div>
                <div className="flex-1">
                  <div
                    className="text-sm mb-1"
                    style={{ color: 'var(--jatayu-text-secondary)' }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-base"
                    style={{
                      color: 'var(--jatayu-text-primary)',
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Map or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="neu-card p-6"
            >
              <h3
                className="text-xl mb-4"
                style={{
                  color: 'var(--jatayu-text-primary)',
                  fontWeight: 600,
                }}
              >
                Business Hours
              </h3>
              <div className="space-y-2" style={{ color: 'var(--jatayu-text-secondary)' }}>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="mt-4" style={{ color: 'var(--jatayu-accent-gold)' }}>
                  24/7 Emergency Support Available
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="neu-card p-8"
          >
            <h3
              className="text-2xl mb-6"
              style={{
                color: 'var(--jatayu-text-primary)',
                fontWeight: 600,
              }}
            >
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--jatayu-text-primary)' }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-none outline-none transition-all duration-300"
                  style={{
                    background: 'var(--jatayu-bg)',
                    color: 'var(--jatayu-text-primary)',
                    boxShadow: 'inset var(--neu-shadow-sm)',
                  }}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--jatayu-text-primary)' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-none outline-none transition-all duration-300"
                  style={{
                    background: 'var(--jatayu-bg)',
                    color: 'var(--jatayu-text-primary)',
                    boxShadow: 'inset var(--neu-shadow-sm)',
                  }}
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--jatayu-text-primary)' }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-none outline-none transition-all duration-300"
                  style={{
                    background: 'var(--jatayu-bg)',
                    color: 'var(--jatayu-text-primary)',
                    boxShadow: 'inset var(--neu-shadow-sm)',
                  }}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--jatayu-text-primary)' }}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-none outline-none transition-all duration-300"
                  style={{
                    background: 'var(--jatayu-bg)',
                    color: 'var(--jatayu-text-primary)',
                    boxShadow: 'inset var(--neu-shadow-sm)',
                  }}
                  placeholder="How can we help?"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2"
                  style={{ color: 'var(--jatayu-text-primary)' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-none outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'var(--jatayu-bg)',
                    color: 'var(--jatayu-text-primary)',
                    boxShadow: 'inset var(--neu-shadow-sm)',
                  }}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full neu-button px-6 py-4 rounded-xl flex items-center justify-center gap-2 group"
                disabled={loading}
                style={{
                  background: 'var(--jatayu-accent-gold)',
                  color: 'var(--jatayu-surface)',
                  fontWeight: 600,
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
