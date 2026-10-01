/**
 * Smoothly scrolls to the element with the given id.
 * Respects the user's "reduce motion" system setting.
 *
 * Shared by Home and Nav so the scroll logic lives in one place.
 */
export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}