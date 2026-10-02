import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Nav from './Nav';
import leaf from '../assets/leaf.png';
import monstera from '../assets/monstera.png.png';
import logo from '../assets/logo.png';
import workshopPlant from '../assets/page2-3.png';
import flowerPlant from '../assets/page2-5.png';
import cropPlant from '../assets/page2-4.png';

function Hero({ onNavigate, showNav = true }) {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.hero-scene > *',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'all',
        },
      );
    },
    { scope: container },
  );

  const handleGo = (targetId) => {
    if (onNavigate) {
      onNavigate(targetId);
      return;
    }

    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {showNav && (
        <div className="hero-nav-wrap">
          <a className="brand-pill" href="#home" aria-label="GreenThumb home">
            <img src={logo} alt="" />
            <span>GreenThumb</span>
          </a>
          <Nav className="hero-nav" />
        </div>
      )}

      <section id="home" ref={container} className="hero-shell" aria-labelledby="hero-title">
        <div className="hero-scene">
        <div className="monstera monstera-left">
          <img src={monstera} alt="" />
        </div>

        <div className="monstera monstera-right">
          <img src={monstera} alt="" />
        </div>

        <div className="hero-feature-grid" aria-label="Featured gardening events">
          <article className="hero-feature-card hero-feature-card-featured">
            <div className="hero-feature-copy">
              <span className="feature-tag">Featured workshop</span>
              <h2>Organic Gardening Workshop</h2>
              <p>
                Learn natural composting and organic planting techniques with our master gardeners.
              </p>
            </div>
            <img className="feature-image feature-image-featured" src={workshopPlant} alt="" />
          </article>

          <div className="hero-feature-row">
            <article className="hero-feature-card">
              <div className="hero-feature-copy">
                <span className="feature-tag">Seasonal event</span>
                <h2>Flower Festival</h2>
                <p>Discover seasonal blooming tips and creative arrangements.</p>
              </div>
              <img className="feature-image" src={flowerPlant} alt="" />
            </article>

            <article className="hero-feature-card">
              <div className="hero-feature-copy">
                <span className="feature-tag">Harvest special</span>
                <h2>Crop Festival</h2>
                <p>Learn creative crop care with certified florists.</p>
              </div>
              <img className="feature-image" src={cropPlant} alt="" />
            </article>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Bring nature home</p>
          <h1 id="hero-title">Grow better, fuller, greener spaces.</h1>
          <p className="subtext">
            Thoughtful plant styling, seasonal care, and fresh garden inspiration for every room.
          </p>

          <div className="cta-row">
            <button type="button" onClick={() => handleGo('plants')}>
              Shop plants
            </button>
            <button type="button" className="secondary" onClick={() => handleGo('about')}>
              About us
            </button>
          </div>
        </div>

        <div className="leaf-accent">
          <img src={leaf} alt="" />
        </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
