import { Phone, Mail, MapPin, Globe, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export function JatayuFooter() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
  ];

  const moreLinks = [
    { label: 'Licenses', href: '#licenses' },
    { label: 'Team', href: '#team' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    window.location.hash = href.replace('#', '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-10 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'var(--jatayu-accent-navy)',
        borderTop: '1px solid rgba(221, 176, 66, 0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="images/jatayulogo.png"
                alt="Jatayu Logo"
                className="w-18 h-14"
               
              />
              
               <img
                src="images/logoname.png"
                alt="Jatayu Logo"
                className="w-18 h-10"
                
              />
              
             
            </div>
            <p
              className="text-sm mb-4 max-w-md leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              Transforming the service sector with modern thinking and reliable excellence.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919492868855"
                className="flex items-center gap-3 text-sm group"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <Phone
                  size={16}
                  className="group-hover:text-[var(--jatayu-accent-gold)] transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <span className="group-hover:text-[var(--jatayu-accent-gold)] transition-colors">
                  +91 94928 68855
                </span>
              </a>
              <a
                href="mailto:Services@jatayuu.com"
                className="flex items-center gap-3 text-sm group"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <Mail
                  size={16}
                  className="group-hover:text-[var(--jatayu-accent-gold)] transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <span className="group-hover:text-[var(--jatayu-accent-gold)] transition-colors">
                  Services@jatayuu.com
                </span>
              </a>
              <a
                href="https://jatayuu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm group"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <Globe
                  size={16}
                  className="group-hover:text-[var(--jatayu-accent-gold)] transition-colors"
                  style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
                <span className="group-hover:text-[var(--jatayu-accent-gold)] transition-colors">
                https://jatayuu.com
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-base mb-4"
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm hover:text-[var(--jatayu-accent-gold)] transition-colors"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3
              className="text-base mb-4"
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              Company
            </h3>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm hover:text-[var(--jatayu-accent-gold)] transition-colors"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div
          className="pt-6 mb-6"
          style={{
            borderTop: '1px solid rgba(221, 176, 66, 0.2)',
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <MapPin
              size={20}
              className="flex-shrink-0 mt-0.5"
              style={{ color: 'var(--jatayu-accent-gold)' }}
            />
            <div className="flex-1">
              <h4
                className="text-sm mb-2"
                style={{
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}
              >
                Our Office
              </h4>
              <a
                href="https://maps.google.com/?q=Flat+206+Block+A+INDIS+VB+City+Bolarum+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[var(--jatayu-accent-gold)] transition-colors inline-block"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Flat 206, Block A, INDIS VB City,
                <br />
                Railway Employees Colony, Bolarum,
                <br />
                Hyderabad, Telangana – 500010
              </a>
            </div>

            <div className="mt-4 sm:mt-0 sm:ml-4 flex items-center gap-8 ">
              <a
                href="https://www.instagram.com/jatayuulimited?igsh=MTh4dWp5aWt2aDY4MA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Instagram className="hover:text-[var(--jatayu-accent-gold)]" size={16} />
              </a>
              <a
                href="https://x.com/Jatayuulimited"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Twitter className="hover:text-[var(--jatayu-accent-gold)]" size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/jatayu-private-limited-018640393/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Linkedin className="hover:text-[var(--jatayu-accent-gold)]" size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Facebook className="hover:text-[var(--jatayu-accent-gold)]" size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{
            borderTop: '1px solid rgba(221, 176, 66, 0.2)',
          }}
        >
          <p
            className="text-sm text-center sm:text-left"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            © {currentYear} JATAYUU ENTERPRISES PVT LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://www.instagram.com/jatayuulimited?igsh=MTh4dWp5aWt2aDY4MA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Instagram className="hover:text-[var(--jatayu-accent-gold)]" size={16} />
              </a>
              <a
                href="https://x.com/Jatayuulimited"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Twitter className="hover:text-[var(--jatayu-accent-gold)]" size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/jatayu-private-limited-018640393/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Linkedin className="hover:text-[var(--jatayu-accent-gold)]" size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                <Facebook className="hover:text-[var(--jatayu-accent-gold)]" size={16} />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-sm hover:text-[var(--jatayu-accent-gold)] transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-sm hover:text-[var(--jatayu-accent-gold)] transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
