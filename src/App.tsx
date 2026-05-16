import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Analytics } from "@vercel/analytics/react"
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen />}
      <div className={`min-h-screen font-body scrollbar-mc transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <Analytics debug={true} />
      </div>
    </ThemeProvider>
  );
}

export default App;
