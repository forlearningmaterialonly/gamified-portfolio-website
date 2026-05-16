import { useState } from 'react';
import { Github, ExternalLink, Tag } from 'lucide-react';
import { projects, ProjectRarity } from '../data/portfolioData';

const categories = ['All', 'SQL', 'Power BI', 'Tableau', 'Python'];

const rarityStyles: Record<ProjectRarity, { border: string; glow: string; label: string; labelColor: string; bg: string }> = {
  common: { border: '#828282', glow: 'rgba(130,130,130,0.3)', label: 'Common', labelColor: '#9E9E9E', bg: 'rgba(130,130,130,0.08)' },
  uncommon: { border: '#50C878', glow: 'rgba(80,200,120,0.3)', label: 'Uncommon', labelColor: '#50C878', bg: 'rgba(80,200,120,0.08)' },
  rare: { border: '#4FC3F7', glow: 'rgba(79,195,247,0.35)', label: 'Rare', labelColor: '#4FC3F7', bg: 'rgba(79,195,247,0.08)' },
  epic: { border: '#FFD700', glow: 'rgba(255,215,0,0.35)', label: 'Epic', labelColor: '#FFD700', bg: 'rgba(255,215,0,0.08)' },
};

const categoryColors: Record<string, string> = {
  'SQL': '#4FC3F7',
  'Power BI': '#FFD700',
  'Tableau': '#FF8C42',
  'Python': '#50C878',
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-stone-50 dark:bg-mc-night relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 63px, rgba(0,0,0,1) 63px, rgba(0,0,0,1) 64px),
          repeating-linear-gradient(90deg, transparent, transparent 63px, rgba(0,0,0,1) 63px, rgba(0,0,0,1) 64px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-4">
          <h2 className="section-title text-gray-800 dark:text-gray-100">Projects</h2>
        </div>
        <p className="text-center font-pixel text-xs text-gray-400 dark:text-gray-500 mb-10">
          — Item Frame Collection —
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const color = cat === 'All' ? '#5D8A3C' : categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="mc-btn px-5 py-2.5 transition-all duration-150"
                style={{
                  background: isActive ? color : 'transparent',
                  color: isActive ? '#fff' : color,
                  border: `2px solid ${color}`,
                  boxShadow: isActive
                    ? `3px 3px 0 rgba(0,0,0,0.4), 0 0 12px ${color}60`
                    : '2px 2px 0 rgba(0,0,0,0.2)',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project) => {
            const rarity = rarityStyles[project.rarity];
            const isHovered = hoveredId === project.id;
            const catColor = categoryColors[project.category] || '#9E9E9E';

            return (
              <div
                key={project.id}
                className="relative flex flex-col overflow-hidden cursor-pointer group transition-all duration-200"
                style={{
                  border: `2px solid ${isHovered ? rarity.border : 'rgba(0,0,0,0.3)'}`,
                  boxShadow: isHovered
                    ? `5px 5px 0 rgba(0,0,0,0.35), 0 0 20px ${rarity.glow}`
                    : '4px 4px 0 rgba(0,0,0,0.2)',
                  background: isHovered ? rarity.bg : undefined,
                  transform: isHovered ? 'translateY(-4px)' : undefined,
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="h-1.5 w-full flex-shrink-0"
                  style={{ background: rarity.border, borderBottom: '2px solid rgba(0,0,0,0.25)' }}
                />

                <div className="relative overflow-hidden h-44 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 image-pixelated"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div
                    className="absolute top-2 right-2 px-2 py-0.5 font-pixel"
                    style={{
                      fontSize: '7px',
                      background: 'rgba(0,0,0,0.75)',
                      border: `1px solid ${rarity.border}`,
                      color: rarity.labelColor,
                      boxShadow: `0 0 6px ${rarity.glow}`,
                    }}
                  >
                    {rarity.label}
                  </div>

                  <div
                    className="absolute bottom-2 left-2 px-2 py-0.5 font-pixel"
                    style={{
                      fontSize: '8px',
                      background: `${catColor}cc`,
                      border: `1px solid rgba(0,0,0,0.3)`,
                      color: '#fff',
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-4 bg-white dark:bg-mc-night-mid">
                  <h3 className="font-body font-bold text-gray-800 dark:text-gray-100 text-sm leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    <Tag size={10} className="text-gray-400 mt-0.5" />
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-body text-xs px-1.5 py-0.5"
                        style={{
                          background: `${catColor}15`,
                          border: `1px solid ${catColor}40`,
                          color: catColor,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-3 border-t border-black/10 dark:border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 font-body text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      style={{
                        border: '1px solid rgba(0,0,0,0.15)',
                        boxShadow: '1px 1px 0 rgba(0,0,0,0.1)',
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 font-body text-xs font-medium text-white transition-colors"
                        style={{
                          background: catColor,
                          border: '1px solid rgba(0,0,0,0.3)',
                          boxShadow: '1px 1px 0 rgba(0,0,0,0.2)',
                        }}
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
