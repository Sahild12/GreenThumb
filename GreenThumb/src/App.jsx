import { useEffect, useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
<<<<<<< HEAD
import Hero from './components/Hero';
=======
import Nav from './components/Nav';
>>>>>>> 8f21e41ae2c4ba5abdb73870b52528c87d8a67b2

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = showWelcome ? 'hidden' : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showWelcome]);

  if (showWelcome) {
    return <Welcome onComplete={() => setShowWelcome(false)} />;
  }

<<<<<<< HEAD
  return <Hero showNav />;
=======
  return (
    <>
      <Nav />
      <main className="app-shell">
        <header className="topbar">
          <div className="brand">
            <span className="brand-mark">G</span>
            <span>GreenThumb</span>
          </div>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#plants">Plants</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <button type="button" className="nav-button">
            Book a visit
          </button>
        </header>

        <section className="hero-section" id="home">
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

        <section className="feature-grid" id="plants">
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

        <section className="feature-grid" id="about">
          <article>
            <span>About</span>
            <h3>Healthy spaces, naturally</h3>
            <p>
              We pair thoughtful design with practical gardening expertise so every plant can
              thrive in the way it was meant to.
            </p>
          </article>

          <article>
            <span>Mission</span>
            <h3>Simple routines</h3>
            <p>
              Our care plans help you build a greener home with confidence, consistency, and joy.
            </p>
          </article>

          <article>
            <span>Joy</span>
            <h3>Made for living</h3>
            <p>
              From bright windowsills to lush patios, we design around real life and real growth.
            </p>
          </article>
        </section>

        <section className="feature-grid" id="contact">
          <article>
            <span>Visit</span>
            <h3>GreenThumb Gardens</h3>
            <p>Open daily • 8am–6pm</p>
          </article>

          <article>
            <span>Email</span>
            <h3>hello@greenthumb.com</h3>
            <p>Ask about styling, sourcing, and seasonal care.</p>
          </article>

          <article>
            <span>Call</span>
            <h3>(415) 555-0148</h3>
            <p>Book a consultation for your home or garden.</p>
          </article>
        </section>
      </main>
    </>
  );
>>>>>>> 8f21e41ae2c4ba5abdb73870b52528c87d8a67b2
}

export default App;
