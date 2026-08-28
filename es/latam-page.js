import { LATAM_OFFERS } from "./latam-config.js";
import { initializeLatamTracking, trackedLatamCheckoutUrl } from "./latam-tracking.js";

initializeLatamTracking();

function bindCheckoutLinks() {
  document.querySelectorAll("[data-latam-checkout]").forEach(function(link) {
    const offerKey = link.dataset.latamCheckout;
    const checkout = LATAM_OFFERS[offerKey] || "";

    if (!checkout) {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
      link.classList.add("is-unavailable");
      link.title = "Configura la oferta LATAM en /es/latam-config.js";
      return;
    }

    link.href = trackedLatamCheckoutUrl(checkout);
    link.rel = "noopener sponsored";
  });
}

function bindFaqAnalyticsFreeBehavior() {
  document.querySelectorAll("details").forEach(function(detail) {
    detail.addEventListener("toggle", function() {
      if (!detail.open) return;
      document.querySelectorAll("details[open]").forEach(function(other) {
        if (other !== detail) other.open = false;
      });
    });
  });
}

function revealOnScroll() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(function(element) { element.classList.add("is-visible"); });
    return;
  }
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
  elements.forEach(function(element) { observer.observe(element); });
}

bindCheckoutLinks();
bindFaqAnalyticsFreeBehavior();
revealOnScroll();
