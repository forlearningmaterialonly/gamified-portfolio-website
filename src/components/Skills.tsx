import { useState } from 'react';
import { Database, Code2, BarChart2, Table2, PieChart, Cpu, TrendingUp, Layers, GitBranch, Zap } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  database: <Database size={28} />,
  code: <Code2 size={28} />,
  'bar-chart-2': <BarChart2 size={28} />,
  table: <Table2 size={28} />,
  'pie-chart': <PieChart size={28} />,
  cpu: <Cpu size={28} />,
  'trending-up': <TrendingUp size={28} />,
  layers: <Layers size={28} />,
  'git-branch': <GitBranch size={28} />,
  zap: <Zap size={28} />,
};

const rarityConfig: Record<string, { border: string; glow: string; label: string; bg: string }> = {
  common: {
    border: '#828282',
    glow: 'rgba(130,130,130,0.4)',
    label: 'Common',
    bg: 'rgba(130,130,130,0.1)',
  },
  uncommon: {
    border: '#50C878',
    glow: 'rgba(80,200,120,0.5)',
    label: 'Uncommon',
    bg: 'rgba(80,200,120,0.1)',
  },
  rare: {
    border: '#4FC3F7',
    glow: 'rgba(79,195,247,0.5)',
    label: 'Rare',
    bg: 'rgba(79,195,247,0.1)',
  },
  epic: {
    border: '#FFD700',
    glow: 'rgba(255,215,0,0.5)',
    label: 'Epic',
    bg: 'rgba(255,215,0,0.1)',
  },
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-mc-night-mid relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0,0,0,1) 31px, rgba(0,0,0,1) 32px),
          repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(0,0,0,1) 31px, rgba(0,0,0,1) 32px)`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-4">
          <h2 className="section-title text-gray-800 dark:text-gray-100">Skills</h2>
        </div>
        <p className="text-center font-pixel text-xs text-gray-400 dark:text-gray-500 mb-12">
          — Inventory —
        </p>

        <div
          className="p-4 md:p-6 relative"
          style={{
            background: 'rgba(0,0,0,0.08)',
            border: '3px solid rgba(0,0,0,0.35)',
            boxShadow: 'inset 3px 3px 8px rgba(0,0,0,0.15), 4px 4px 0 rgba(0,0,0,0.2)',
          }}
        >
          <div
            className="absolute top-2 left-3 font-pixel text-gray-400 dark:text-gray-600"
            style={{ fontSize: '8px' }}
          >
            INVENTORY — {skills.length}/{skills.length} SLOTS
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {skills.map((skill) => {
              const rarity = rarityConfig[skill.rarity];
              const isHovered = hoveredSkill === skill.name;

              return (
                <div
                  key={skill.name}
                  className="relative cursor-pointer group select-none"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className="transition-all duration-150"
                    style={{
                      border: `2px solid ${isHovered ? rarity.border : 'rgba(0,0,0,0.5)'}`,
                      boxShadow: isHovered
                        ? `3px 3px 0 rgba(0,0,0,0.4), 0 0 16px ${rarity.glow}, inset 2px 2px 0 rgba(255,255,255,0.15)`
                        : 'inset 3px 3px 6px rgba(0,0,0,0.4), inset -1px -1px 2px rgba(255,255,255,0.08)',
                      background: isHovered ? rarity.bg : 'rgba(20,20,20,0.35)',
                      transform: isHovered ? 'translateY(-3px)' : 'none',
                      padding: '16px 12px',
                      minHeight: '160px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      className="flex justify-center mb-3"
                      style={{ color: isHovered ? rarity.border : skill.color }}
                    >
                      {iconMap[skill.icon]}
                    </div>

                    <div className="text-center">
                      <div
                        className="font-body font-semibold text-gray-800 dark:text-gray-100 text-sm leading-tight"
                      >
                        {skill.name}
                      </div>
                      <div
                        className="font-pixel mt-1"
                        style={{ fontSize: '8px', color: rarity.border }}
                      >
                        {rarity.label}
                      </div>
                    </div>

                    <div
                      className="mt-3 h-1.5 w-full overflow-hidden"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(0,0,0,0.3)',
                      }}
                    >
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: isHovered ? `${skill.level}%` : `${skill.level * 0.7}%`,
                          background: rarity.border,
                          boxShadow: `0 0 4px ${rarity.glow}`,
                        }}
                      />
                    </div>

                    <div
                      className="absolute top-1 right-1.5 font-pixel"
                      style={{ fontSize: '7px', color: rarity.border, opacity: 0.7 }}
                    >
                      {skill.level}
                    </div>
                  </div>

                  {isHovered && (
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 pointer-events-none whitespace-nowrap px-3 py-2"
                      style={{
                        background: 'rgba(10,10,10,0.95)',
                        border: `2px solid ${rarity.border}`,
                        boxShadow: `3px 3px 0 rgba(0,0,0,0.5), 0 0 12px ${rarity.glow}`,
                      }}
                    >
                      <div className="font-body font-semibold text-white text-xs">{skill.name}</div>
                      <div className="font-pixel" style={{ fontSize: '8px', color: rarity.border }}>
                        Proficiency: {skill.level}%
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-center pt-4 border-t border-black/10 dark:border-white/10">
            {Object.entries(rarityConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-1.5">
                <div
                  className="w-3 h-3"
                  style={{ background: config.border, border: '1px solid rgba(0,0,0,0.3)' }}
                />
                <span className="font-pixel" style={{ fontSize: '8px', color: config.border }}>
                  {config.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
