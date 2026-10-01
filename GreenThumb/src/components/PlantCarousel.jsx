import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import * as plantData from '../Data/plantsData';

const plants = plantData.plants ?? [];

function PlantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.set([".anim-title", ".anim-img", ".anim-benefits", ".anim-text"], { clearProps: "all" });

    gsap.from(".anim-title", {
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });

    gsap.from(".anim-img", {
      x: 300,
      y: 200,
      scale: 0.15,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6");

    gsap.from(".anim-benefits", {
      x: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6");

    gsap.from(".anim-text", {
      x: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.6");

  }, { dependencies: [currentIndex], scope: containerRef });

  if (plants.length === 0) {
    return (
      <section id="plants" ref={containerRef} className="page-section" aria-live="polite">
        <p>No plants are available right now.</p>
      </section>
    );
  }

  const currentPlant = plants[currentIndex];
  const nextIndex = (currentIndex + 1) % plants.length;
  const nextPlant = plants[nextIndex];

  return (
    <section
      id="plants"
      ref={containerRef}
      className="page-section relative w-full min-h-screen h-auto md:h-screen bg-gradient-to-b from-[#143d2c] to-[#0c261b] text-white overflow-visible md:overflow-hidden font-sans flex flex-col justify-between pt-16 md:pt-8 pb-8 md:pb-0"
    >
      <header className="w-full px-6 md:px-12 py-4 flex justify-between items-center z-20">
        <div className="flex gap-3">
          <button aria-label="Shopping Cart" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
          <button aria-label="Wishlist" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </button>
        </div>
      </header>

      <div className="relative flex-1 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center px-6">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-40 md:opacity-100">
          <h2 className="anim-title text-5xl sm:text-7xl md:text-8xl font-bold leading-none tracking-wide md:-ml-[20%] drop-shadow-lg text-center">
            {currentPlant.title1}
          </h2>
          <h2 className="anim-title text-5xl sm:text-7xl md:text-8xl font-bold leading-none tracking-wide md:ml-[20%] drop-shadow-lg text-center mt-2 md:mt-0">
            {currentPlant.title2}
          </h2>
        </div>

        <img
          src={currentPlant.mainImage}
          alt={`${currentPlant.title1} ${currentPlant.title2}`}
          className="anim-img relative z-10 w-auto h-[32vh] sm:h-[42vh] md:h-[48vh] max-h-[420px] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)] my-4 md:my-0"
        />

        <div className="anim-benefits relative md:absolute z-20 md:right-[8%] lg:right-[12%] md:top-[50%] bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-3 sm:p-4 w-full max-w-xs md:w-48 shadow-xl mt-2 md:mt-0">
          <h3 className="text-xs sm:text-sm font-semibold mb-1.5">Benefits :</h3>
          <ul className="text-[11px] sm:text-xs space-y-1 opacity-90">
            {currentPlant.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 relative z-20 pb-4 md:pb-8">
        <div className="max-w-md text-center md:text-left">
          <p className="anim-text text-xs sm:text-sm md:text-[15px] leading-relaxed opacity-90 mb-4 drop-shadow-md">
            {currentPlant.description}
          </p>
          <div className="anim-text flex items-center justify-center md:justify-start gap-4 sm:gap-6">
            <p className="text-lg sm:text-xl font-semibold">Price : {currentPlant.price}</p>
            <button className="px-5 sm:px-6 py-2 border border-white/60 rounded-full text-xs sm:text-sm font-medium hover:bg-white hover:text-[#143d2c] transition-colors shadow-lg cursor-pointer">
              SHOP NOW
            </button>
          </div>
        </div>

        <div
          onClick={() => setCurrentIndex(nextIndex)}
          className="w-full max-w-xs md:w-72 bg-[#1b4635]/90 backdrop-blur-md rounded-2xl md:rounded-t-[32px] md:rounded-b-none p-4 md:pt-10 md:pb-6 text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:bg-[#225742]/90 shadow-2xl border border-white/10 group"
        >
          <h3 className="text-sm sm:text-base font-medium mb-1 capitalize">
            {nextPlant.title1.toLowerCase()} {nextPlant.title2.toLowerCase()}
          </h3>
          <p className="text-[11px] opacity-75 line-clamp-2">
            {nextPlant.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlantCarousel;