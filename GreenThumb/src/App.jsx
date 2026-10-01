import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Hero from './components/Hero';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <Welcome onComplete={() => setShowWelcome(false)} />;
  }

  return <Hero showNav />;
}

export default App;
