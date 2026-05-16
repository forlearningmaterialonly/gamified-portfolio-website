import { useEffect, useRef } from 'react';
import { ChevronDown, Download, Eye, Sword, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.5 + 3) % 95}%`,
  delay: `${(i * 0.7) % 5}s`,
  duration: `${3 + (i % 3)}s`,
  size: i % 3 === 0 ? 6 : i % 3 === 1 ? 4 : 3,
  color: i % 4 === 0 ? '#FFD700' : i % 4 === 1 ? '#4FC3F7' : i % 4 === 2 ? '#50C878' : '#FFFFFF',
}));

const TERRAIN_BLOCKS = [
  { x: 0, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
  { x: 64, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
  { x: 128, y: 0, w: 64, h: 32, color: '#5D8A3C', top: 1 },
  { x: 192, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
  { x: 256, y: 0, w: 64, h: 96, color: '#5D8A3C', top: 1 },
  { x: 320, y: 0, w: 64, h: 48, color: '#5D8A3C', top: 1 },
  { x: 384, y: 0, w: 64, h: 80, color: '#5D8A3C', top: 1 },
  { x: 448, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
  { x: 512, y: 0, w: 64, h: 32, color: '#5D8A3C', top: 1 },
  { x: 576, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
  { x: 640, y: 0, w: 64, h: 80, color: '#5D8A3C', top: 1 },
  { x: 704, y: 0, w: 64, h: 48, color: '#5D8A3C', top: 1 },
  { x: 768, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
  { x: 832, y: 0, w: 64, h: 96, color: '#5D8A3C', top: 1 },
  { x: 896, y: 0, w: 64, h: 32, color: '#5D8A3C', top: 1 },
  { x: 960, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
  { x: 1024, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
  { x: 1088, y: 0, w: 64, h: 48, color: '#5D8A3C', top: 1 },
  { x: 1152, y: 0, w: 64, h: 80, color: '#5D8A3C', top: 1 },
  { x: 1216, y: 0, w: 64, h: 64, color: '#5D8A3C', top: 1 },
];

export default function Hero() {
  const { isDark } = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
  };

  const skyGradient = isDark
    ? 'linear-gradient(180deg, #0D1B2A 0%, #1B2D3E 40%, #0F2027 70%, #1a1a1a 100%)'
    : 'linear-gradient(180deg, #87CEEB 0%, #B0E0FF 35%, #C8F0D0 70%, #A8D880 85%, #8BC34A 100%)';

  return (
    <section
      id="hero"
      ref={scrollRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: skyGradient }}
    >
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 80 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-none bg-white"
              style={{
                width: i % 5 === 0 ? 3 : 2,
                height: i % 5 === 0 ? 3 : 2,
                top: `${(i * 3.7 + 2) % 65}%`,
                left: `${(i * 4.3 + 1) % 98}%`,
                opacity: 0.4 + (i % 5) * 0.12,
              }}
            />
          ))}
        </div>
      )}

      {!isDark && (
        <>
          <div
            className="absolute top-16 left-[5%] flex gap-2 animate-cloud-move"
            style={{ animationDelay: '0s' }}
          >
            <Cloud />
          </div>
          <div
            className="absolute top-24 left-[20%] flex gap-2 animate-cloud-move-slow"
            style={{ animationDelay: '-18s' }}
          >
            <Cloud size="sm" />
          </div>
          <div
            className="absolute top-12 left-[55%] flex gap-2 animate-cloud-move"
            style={{ animationDelay: '-25s' }}
          >
            <Cloud size="lg" />
          </div>
        </>
      )}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute animate-particle-rise"
            style={{
              left: p.left,
              bottom: '120px',
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="relative inline-block mb-4 mx-auto">
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 animate-float pointer-events-none hidden sm:block" style={{ animationDelay: '0s' }}>
            <Sword size={20} className="text-mc-diamond -rotate-45" />
          </div>
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 animate-float pointer-events-none hidden sm:block" style={{ animationDelay: '1s' }}>
            <Shield size={20} className="text-mc-gold" />
          </div>
          
          <div
            className="inline-block px-4 py-2"
            style={{
              background: isDark ? 'rgba(13,27,42,0.7)' : 'rgba(0,0,0,0.45)',
              border: '2px solid rgba(255,255,255,0.2)',
              boxShadow: '3px 3px 0 rgba(0,0,0,0.4)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="font-pixel text-xs text-mc-emerald">
              DATA ANALYST
            </span>
          </div>
        </div>

        <h1
          className="font-pixel text-white mb-6 leading-relaxed"
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
            textShadow: '3px 3px 0px rgba(0,0,0,0.7), 5px 5px 0px rgba(0,0,0,0.3)',
          }}
        >
          {personalInfo.name}
        </h1>

        <p
          className="font-body text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.6)' }}
        >
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="mc-btn bg-mc-grass hover:bg-mc-grass-light text-white px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Eye size={14} />
            View My Work
          </button>
          <a
            href="https://drive.google.com/uc?export=download&id=11lcEeFyM6gcjLSLR2dOJYDhwZPmFIlTM"
            className="mc-btn text-gray-100 px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center"
            style={{
              background: isDark ? 'rgba(27,45,62,0.8)' : 'rgba(60,60,60,0.75)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 justify-center mt-12">
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                background: isDark ? 'rgba(13,27,42,0.7)' : 'rgba(0,0,0,0.4)',
                border: '2px solid rgba(255,255,255,0.15)',
                boxShadow: '3px 3px 0 rgba(0,0,0,0.4)',
                backdropFilter: 'blur(8px)',
                padding: '10px 16px',
              }}
            >
              <div
                className="font-pixel text-mc-gold text-sm md:text-base"
                style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.5)' }}
              >
                {stat.value}
              </div>
              <div className="font-body text-gray-300 text-xs mt-1 whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: '96px' }}>
        <svg
          viewBox="0 0 1280 96"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {TERRAIN_BLOCKS.map((b, i) => (
            <g key={i}>
              <rect
                x={b.x} y={96 - b.h}
                width={b.w} height={b.h}
                fill="#5D8A3C"
              />
              <rect
                x={b.x} y={96 - b.h}
                width={b.w} height={8}
                fill="#7DB85A"
              />
              <rect
                x={b.x} y={96 - b.h + 8}
                width={b.w} height={b.h - 8}
                fill="#8B5E3C"
              />
              <rect
                x={b.x} y={96 - b.h}
                width={b.w} height={b.h}
                fill="none"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
              />
            </g>
          ))}
        </svg>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-float z-10"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}

function Cloud({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: { main: 40, side: 24 }, md: { main: 60, side: 36 }, lg: { main: 80, side: 48 } };
  const { main, side } = dims[size];
  return (
    <div className="relative flex items-end opacity-90">
      <div
        className="bg-white"
        style={{ width: side, height: side * 0.6, marginRight: -4 }}
      />
      <div
        className="bg-white"
        style={{ width: main, height: main * 0.6 }}
      />
      <div
        className="bg-white"
        style={{ width: side, height: side * 0.6, marginLeft: -4 }}
      />
    </div>
  );
}
