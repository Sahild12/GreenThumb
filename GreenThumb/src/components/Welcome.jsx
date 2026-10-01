import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import welcome from '../assets/Welcome.png';

function Welcome({ onComplete }) {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    timeline
      .fromTo(
        container.current,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
      )
      .to(container.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.inOut',
      });
  }, { scope: container });

  return (
    <div
      ref={container}
      className="welcome-screen"
      style={{ backgroundImage: `url(${welcome})` }}
    >
      <div className="welcome-overlay" />
      <div className="welcome-content">
        <p className="welcome-kicker">Welcome to</p>
        <div className="welcome-title-wrap">
          <h1>GreenThumb</h1>
          <h1>Gardens</h1>
        </div>
        <p className="welcome-tagline">Where Nature Greets You with a Smile.</p>
      </div>
    </div>
  );
}

export default Welcome;