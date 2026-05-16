import { Award, Calendar, Building2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const rarityStyles: Record<string, { border: string; glow: string; label: string; bg: string; badgeBg: string }> = {
  common: { border: '#828282', glow: 'rgba(130,130,130,0.3)', label: 'Common', bg: 'rgba(130,130,130,0.08)', badgeBg: '#555' },
  uncommon: { border: '#50C878', glow: 'rgba(80,200,120,0.3)', label: 'Uncommon', bg: 'rgba(80,200,120,0.08)', badgeBg: '#2D6E40' },
  rare: { border: '#4FC3F7', glow: 'rgba(79,195,247,0.35)', label: 'Rare', bg: 'rgba(79,195,247,0.08)', badgeBg: '#1565C0' },
  epic: { border: '#FFD700', glow: 'rgba(255,215,0,0.35)', label: 'Epic', bg: 'rgba(255,215,0,0.08)', badgeBg: '#8B6914' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-white dark:bg-mc-night-mid relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0,0,0,1) 31px, rgba(0,0,0,1) 32px),
          repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(0,0,0,1) 31px, rgba(0,0,0,1) 32px)`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-4">
          <h2 className="section-title text-gray-800 dark:text-gray-100">Certifications</h2>
        </div>
        <p className="text-center font-pixel text-xs text-gray-400 dark:text-gray-500 mb-12">
          — Achievements Unlocked —
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => {
            const rarity = rarityStyles[cert.rarity];

            return (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden group transition-all duration-200 hover:-translate-y-1 block ${!cert.url ? 'pointer-events-none' : ''}`}
                style={{
                  border: `2px solid ${rarity.border}`,
                  boxShadow: `4px 4px 0 rgba(0,0,0,0.25), 0 0 12px ${rarity.glow}`,
                  background: rarity.bg,
                }}
              >
                <div
                  className="flex items-stretch"
                  style={{ borderBottom: `2px solid ${rarity.border}40` }}
                >
                  <div
                    className="flex flex-col items-center justify-center px-4 py-4 flex-shrink-0"
                    style={{
                      background: rarity.badgeBg,
                      borderRight: `2px solid ${rarity.border}40`,
                      minWidth: '72px',
                    }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center mb-1.5"
                      style={{
                        border: `2px solid ${rarity.border}`,
                        boxShadow: `0 0 8px ${rarity.glow}, inset 2px 2px 0 rgba(255,255,255,0.15)`,
                        background: 'rgba(0,0,0,0.3)',
                      }}
                    >
                      <Award size={18} style={{ color: rarity.border }} />
                    </div>
                    <span
                      className="font-pixel text-center"
                      style={{ fontSize: '7px', color: rarity.border, lineHeight: 1.4 }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <div className="flex-1 p-4 bg-white dark:bg-mc-night-mid">
                    <div
                      className="font-pixel mb-1"
                      style={{ fontSize: '7px', color: rarity.border }}
                    >
                      [{rarity.label}] Achievement
                    </div>

                    <h3 className="font-body font-bold text-gray-800 dark:text-gray-100 text-sm leading-snug mb-2">
                      {cert.name}
                    </h3>

                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Building2 size={11} className="text-gray-400 flex-shrink-0" />
                      <span className="font-body text-xs text-gray-500 dark:text-gray-400">
                        {cert.organization}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Calendar size={11} style={{ color: rarity.border }} className="flex-shrink-0" />
                      <span className="font-pixel" style={{ fontSize: '8px', color: rarity.border }}>
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="h-1"
                  style={{
                    background: `linear-gradient(90deg, ${rarity.border}80, ${rarity.border}, ${rarity.border}80)`,
                  }}
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${rarity.border}30`,
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
