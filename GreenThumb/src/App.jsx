import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import './App.css';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import PlantCarousel from './components/PlantCarousel';


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = showWelcome ? 'hidden' : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showWelcome]);

  useEffect(() => {
    if (showWelcome) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: !prefersReducedMotion,
    });

    return () => lenis.destroy();
  }, [showWelcome]);

  if (showWelcome) {
    return <Welcome onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <>
      <Hero showNav />
      <PlantCarousel />
    </>
  );
}

export default App;
