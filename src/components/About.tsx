import { User, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-mc-night-mid relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0,0,0,1) 31px, rgba(0,0,0,1) 32px),
            repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(0,0,0,1) 31px, rgba(0,0,0,1) 32px)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14">
          <h2 className="section-title text-gray-800 dark:text-gray-100">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div
              className="relative overflow-hidden"
              style={{
                border: '3px solid rgba(0,0,0,0.3)',
                boxShadow: '6px 6px 0 rgba(0,0,0,0.25), inset 2px 2px 0 rgba(255,255,255,0.15), inset -2px -2px 0 rgba(0,0,0,0.1)',
              }}
            >
              <div
                className="h-2 w-full"
                style={{
                  background: 'linear-gradient(90deg, #5D8A3C 0%, #7DB85A 50%, #5D8A3C 100%)',
                  borderBottom: '2px solid rgba(0,0,0,0.3)',
                }}
              />

              <div className="p-6 bg-stone-100 dark:bg-mc-night-mid/80">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 grass-texture flex items-center justify-center flex-shrink-0"
                    style={{
                      border: '2px solid rgba(0,0,0,0.4)',
                      boxShadow: '2px 2px 0 rgba(0,0,0,0.3)',
                    }}
                  >
                    <User size={18} className="text-white" />
                  </div>
                  <h3
                    className="font-pixel text-sm text-mc-grass dark:text-mc-grass-light"
                    style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.2)' }}
                  >
                    Profile
                  </h3>
                </div>

                <div className="space-y-3">
                  {personalInfo.about.split('\n\n').map((para, i) => (
                    <p key={i} className="font-body text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div
              style={{
                border: '3px solid rgba(0,0,0,0.25)',
                boxShadow: '6px 6px 0 rgba(0,0,0,0.2), inset 2px 2px 0 rgba(255,255,255,0.12)',
              }}
            >
              <div
                className="h-2 w-full"
                style={{
                  background: 'linear-gradient(90deg, #4FC3F7 0%, #2196F3 50%, #4FC3F7 100%)',
                  borderBottom: '2px solid rgba(0,0,0,0.3)',
                }}
              />
              <div className="p-5 bg-stone-100 dark:bg-mc-night-mid/80">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={16} className="text-mc-diamond" />
                  <span className="font-pixel text-xs text-mc-diamond">Quick Stats</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center py-3 px-2 bg-white dark:bg-mc-night/60"
                      style={{
                        border: '2px solid rgba(0,0,0,0.2)',
                        boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      <div className="font-pixel text-mc-gold text-base md:text-lg">{stat.value}</div>
                      <div className="font-body text-gray-500 dark:text-gray-400 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                border: '3px solid rgba(0,0,0,0.25)',
                boxShadow: '6px 6px 0 rgba(0,0,0,0.2), inset 2px 2px 0 rgba(255,255,255,0.12)',
              }}
            >
              <div
                className="h-2 w-full"
                style={{
                  background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                  borderBottom: '2px solid rgba(0,0,0,0.3)',
                }}
              />
              <div className="p-5 bg-stone-100 dark:bg-mc-night-mid/80">
                <div className="font-pixel text-xs text-mc-gold mb-3">Core Strengths</div>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.coreStrengths.map((strength) => (
                    <span
                      key={strength}
                      className="font-body text-xs px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-mc-night/60"
                      style={{
                        border: '2px solid rgba(0,0,0,0.2)',
                        boxShadow: '2px 2px 0 rgba(0,0,0,0.15)',
                      }}
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
