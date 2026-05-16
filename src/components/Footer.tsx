import { Mail, Linkedin, Github, BarChart2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative"
      style={{
        background: '#0D1117',
        borderTop: '4px solid #5D8A3C',
      }}
    >
      <div
        className="h-1"
        style={{ background: 'linear-gradient(90deg, #5D8A3C, #4FC3F7, #FFD700, #50C878, #5D8A3C)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 grass-texture flex items-center justify-center"
                style={{
                  border: '2px solid rgba(255,255,255,0.2)',
                  boxShadow: '2px 2px 0 rgba(0,0,0,0.4)',
                }}
              >
                <BarChart2 size={18} className="text-white" />
              </div>
              <div>
                <div className="font-pixel text-white text-xs">{personalInfo.name}</div>
                <div className="font-body text-gray-400 text-xs mt-0.5">{personalInfo.title}</div>
              </div>
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <div className="font-pixel text-mc-grass text-xs mb-4">Navigation</div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-body text-sm text-gray-400 hover:text-mc-grass transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-pixel text-mc-diamond text-xs mb-4">Connect</div>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div
                  className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                  style={{ background: '#5D8A3C', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <Mail size={12} className="text-white" />
                </div>
                <span className="font-body text-sm">{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div
                  className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                  style={{ background: '#0A66C2', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <Linkedin size={12} className="text-white" />
                </div>
                <span className="font-body text-sm">LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div
                  className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                  style={{ background: '#24292e', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <Github size={12} className="text-white" />
                </div>
                <span className="font-body text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-2 font-body text-xs text-gray-500">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1.5 font-body text-xs text-gray-500">
            <span>Built with</span>
            <span className="text-mc-gold font-pixel" style={{ fontSize: '8px' }}>Bolt</span>
            <span>and a little Minecraft magic</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
