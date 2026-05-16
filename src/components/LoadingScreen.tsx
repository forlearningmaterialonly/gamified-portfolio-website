import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [splashText, setSplashText] = useState("Initializing architecture...");

  const splashes = [
    "Processing Bronze to Gold layers...",
    "Refining Silver data architecture...",
    "Calculating complex DAX measures...",
    "Brewing Python analytics scripts...",
    "Optimizing SQL-based pipelines...",
    "Spawning new Data Analysts...",
    "Leveling up 200+ students...",
    "Wiring the redstone with n8n...",
    "Summoning Agentic AI bots...",
    "Mining deep business insights...",
    "Crafting legendary dashboards...",
    "Equipping PL-300 artifacts...",
    "Deciphering raw data stories...",
    "Establishing peer-to-peer mentoring..."
  ];

  useEffect(() => {
    const splashInterval = setInterval(() => {
      setSplashText(splashes[Math.floor(Math.random() * splashes.length)]);
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(splashInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center dirt-texture overflow-hidden">
      {/* Overlay for darkened effect like in MC menu */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-white text-shadow-pixel mc-heading tracking-widest uppercase">
          MINECRAFT
        </h1>
        
        <div className="w-full h-8 bg-[#2d2d2d] border-2 border-white/20 p-1 relative">
          <div 
            className="h-full bg-[#3c8527] transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[8px] md:text-[10px] text-white font-pixel font-bold tracking-tight text-shadow-pixel">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </div>
        </div>
        
        <p className="mt-6 text-white text-[10px] md:text-sm mc-heading animate-pulse text-center">
          {splashText}
        </p>
      </div>
      
      <div className="absolute bottom-8 text-white/40 text-[8px] mc-heading">
        Portfolio v1.0.0
      </div>
    </div>
  );
};

export default LoadingScreen;
