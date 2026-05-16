import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, BarChart2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-900/95 dark:bg-mc-night/98 backdrop-blur-md border-b-2 border-mc-grass/40 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-9 h-9 grass-texture flex items-center justify-center"
              style={{
                border: '2px solid rgba(0,0,0,0.5)',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.4), inset 1px 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              <BarChart2 size={16} className="text-white" />
            </div>
            <span
              className="text-white font-pixel text-xs hidden sm:block"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.6)' }}
            >
              AN
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 text-xs font-medium transition-all duration-150 relative font-body ${
                    isActive
                      ? 'text-mc-grass bg-mc-grass/15 border border-mc-grass/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-mc-grass" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 flex items-center justify-center transition-all duration-150 ${
                isDark ? 'bg-mc-night-mid text-mc-gold' : 'bg-stone-800/60 text-mc-sky'
              }`}
              style={{
                border: '2px solid rgba(0,0,0,0.5)',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.4)',
              }}
              title={isDark ? 'Day Mode' : 'Night Mode'}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-white bg-stone-800/60"
              style={{
                border: '2px solid rgba(0,0,0,0.5)',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.4)',
              }}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-stone-900/98 dark:bg-mc-night border-t-2 border-mc-grass/30"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.5)' }}
        >
          <div className="px-4 py-2 flex flex-col gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-3 py-2.5 text-sm font-medium transition-colors border-l-2 font-body ${
                    isActive
                      ? 'border-mc-grass text-mc-grass bg-mc-grass/10'
                      : 'border-transparent text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
