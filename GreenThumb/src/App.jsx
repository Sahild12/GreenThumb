import { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <Welcome onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">G</span>
          <span>GreenThumb</span>
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#plants">Plants</a>
          <a href="#services">Services</a>
          <a href="#journal">Journal</a>
        </nav>
        <button type="button" className="nav-button">
          Book a visit
        </button>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Grow with confidence</p>
          <h2>Nature-inspired care for every corner of your home.</h2>
          <p className="lead">
            From curated indoor arrangements to garden planning for thriving outdoor spaces,
            GreenThumb helps you create a home that feels alive.
          </p>
          <div className="cta-row">
            <button type="button" className="primary-button">
              Shop plants
            </button>
            <button type="button" className="secondary-button">
              Explore services
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Featured plants">
          <div className="plant-card large-card">
            <span className="badge">Best seller</span>
            <h3>Monstera</h3>
            <p>Low-maintenance and lush.</p>
          </div>
          <div className="plant-card small-card">
            <span className="badge alt">New</span>
            <h3>Fern set</h3>
            <p>Soft textures, bright spaces.</p>
          </div>
        </div>
      </section>

      <section className="feature-grid" id="services">
        <article>
          <span>01</span>
          <h3>Plant styling</h3>
          <p>Thoughtful arrangements to refresh your indoor oasis.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Garden planning</h3>
          <p>Seasonal guidance for sustainable, healthy growth.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Care support</h3>
          <p>Simple tips and check-ins that keep every plant thriving.</p>
        </article>
      </section>
    </main>
  );
}

export default App;
