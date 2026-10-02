import { useState } from "react";
import PropTypes from "prop-types";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Navigation items. Each `id` must match the `id` of a section on the page
 * (e.g. <section id="plants">), because it is used for the #hash link and for
 * scrolling.
 *
 * Defined outside the component so the array is created once,
 * not on every render.
 */
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "plants", label: "Plants" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "nature-video", label: "Nature Story" },
];

/**
 * Tailwind class groups.
 * Kept as full, static strings (never built by concatenating fragments) so
 * Tailwind's scanner can detect every class.
 */
const STYLES = {
  // The floating glass "pill" container
  nav: [
    // layout
    "flex items-center justify-center gap-1.5 sm:gap-3 md:gap-6",
    "w-auto max-w-[92vw] overflow-x-auto",
    // spacing
    "py-1.5 px-3 sm:px-4 md:py-2 md:px-6",
    // glass look
    "rounded-full border border-white/40 bg-white/40 backdrop-blur-xl",
    "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
    // text + motion
    "text-xs md:text-sm font-medium transition-all duration-300",
  ].join(" "),

  // Shared by every link
  link: [
    "nav-pill cursor-pointer whitespace-nowrap rounded-full",
    "px-2.5 sm:px-3.5 md:px-4 py-1 md:py-1.5",
    "transition-all duration-300",
    // visible keyboard focus
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7A3C]",
  ].join(" "),

  // Only for the current section
  linkActive: "bg-[#4A7A3C] text-white shadow-md font-semibold scale-105",

  // Only for the other sections
  linkInactive: "text-gray-800 hover:text-[#4A7A3C] hover:bg-white/40",
};

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Smoothly scrolls to the element with the given id.
 * Respects the user's "reduce motion" system setting.
 */
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

/* -------------------------------------------------------------------------- */
/*  Sub-component: a single navigation link                                   */
/* -------------------------------------------------------------------------- */

function NavLink({ id, label, isActive, onClick }) {
  const stateClasses = isActive ? STYLES.linkActive : STYLES.linkInactive;

  return (
    <a
      href={`#${id}`}
      onClick={(event) => onClick(id, event)}
      aria-current={isActive ? "page" : undefined}
      className={`${STYLES.link} ${stateClasses}`}
    >
      {label}
    </a>
  );
}

NavLink.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

/* -------------------------------------------------------------------------- */
/*  Main component                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Floating top navigation bar.
 *
 * @param {string}   activeSection - id of the section currently in view
 * @param {function} onNavigate    - optional; called with the section id.
 *                                   If omitted, the component scrolls to the
 *                                   section itself.
 * @param {string}   className     - optional extra classes (e.g. positioning)
 */
function Nav({ activeSection, onNavigate, className = "" }) {
  const [selectedSection, setSelectedSection] = useState("home");
  const currentSection = activeSection ?? selectedSection;

  const handleLinkClick = (id, event) => {
    // Stop the browser's instant jump so we can control the behaviour.
    event.preventDefault();
    setSelectedSection(id);

    if (onNavigate) {
      onNavigate(id); // parent decides what to do
    } else {
      scrollToSection(id); // default behaviour
    }
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`${STYLES.nav} ${className}`.trim()}
    >
      {NAV_ITEMS.map(({ id, label }) => (
        <NavLink
          key={id}
          id={id}
          label={label}
          isActive={currentSection === id}
          onClick={handleLinkClick}
        />
      ))}
    </nav>
  );
}

Nav.propTypes = {
  activeSection: PropTypes.string,
  onNavigate: PropTypes.func,
  className: PropTypes.string,
};

export default Nav;