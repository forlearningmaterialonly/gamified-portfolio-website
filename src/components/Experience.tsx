import { Briefcase, Calendar, CheckSquare } from 'lucide-react';
import { experience } from '../data/portfolioData';

const accentColors = ['#5D8A3C', '#4FC3F7', '#FFD700'];
const lightAccents = ['#7DB85A', '#5AAFD4', '#FFC107'];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-stone-50 dark:bg-mc-night relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 63px, rgba(0,0,0,1) 63px, rgba(0,0,0,1) 64px),
          repeating-linear-gradient(90deg, transparent, transparent 63px, rgba(0,0,0,1) 63px, rgba(0,0,0,1) 64px)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <h2 className="section-title text-gray-800 dark:text-gray-100">Experience</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-mc-grass via-mc-diamond to-mc-gold opacity-40" />

          <div className="space-y-8">
            {experience.map((job, index) => {
              const isLeft = index % 2 === 0;
              const accent = accentColors[index % accentColors.length];
              const lightAccent = lightAccents[index % lightAccents.length];

              return (
                <div
                  key={job.id}
                  className={`md:flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-[calc(50%-28px)] relative">
                    <div
                      className="bg-white dark:bg-mc-night-mid relative overflow-hidden group transition-all duration-200 hover:-translate-y-1"
                      style={{
                        border: `3px solid rgba(0,0,0,0.25)`,
                        boxShadow: `6px 6px 0 rgba(0,0,0,0.2), inset 2px 2px 0 rgba(255,255,255,0.1)`,
                      }}
                    >
                      <div
                        className="h-1.5 w-full"
                        style={{ background: accent, borderBottom: '2px solid rgba(0,0,0,0.2)' }}
                      />

                      <div className="p-7">
                        <div className="flex items-start justify-between gap-3 mb-5">
                          <div>
                            <h3 className="font-body font-bold text-gray-800 dark:text-gray-100 text-xl">
                              {job.role}
                            </h3>
                            <div className="flex items-center gap-2 mt-1.5">
                              <Briefcase size={18} style={{ color: accent }} />
                              <span className="font-body text-lg font-medium" style={{ color: accent }}>
                                {job.company}
                              </span>
                            </div>
                          </div>
                          <div
                            className="flex items-center gap-2 px-3 py-1.5 flex-shrink-0"
                            style={{
                              background: `${accent}18`,
                              border: `1px solid ${accent}50`,
                            }}
                          >
                            <Calendar size={15} style={{ color: accent }} />
                            <span className="font-pixel text-xs whitespace-nowrap" style={{ color: accent, fontSize: '12px' }}>
                              {job.period}
                            </span>
                          </div>
                        </div>

                        <p className="font-body text-base text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                          {job.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          {job.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckSquare size={18} className="mt-0.5 flex-shrink-0" style={{ color: lightAccent }} />
                              <span className="font-body text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10 dark:border-white/10">
                          {job.tech.map((t) => (
                            <span
                              key={t}
                              className="font-body text-base px-3 py-1"
                              style={{
                                background: `${accent}15`,
                                border: `1px solid ${accent}40`,
                                color: accent,
                                fontSize: '14px',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                        style={{
                          boxShadow: `inset 0 0 0 2px ${accent}40`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="hidden md:flex w-14 flex-shrink-0 items-center justify-center">
                    <div
                      className="w-10 h-10 flex items-center justify-center z-10"
                      style={{
                        background: accent,
                        border: '3px solid rgba(0,0,0,0.4)',
                        boxShadow: '3px 3px 0 rgba(0,0,0,0.3)',
                      }}
                    >
                      <span className="font-pixel text-white" style={{ fontSize: '10px' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-28px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
