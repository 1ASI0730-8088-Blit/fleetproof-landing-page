/* ========================================
   FleetProof Landing Page
   Feature: Navigation
   ======================================== */

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const navActions = document.querySelector(".nav-actions");

function toggleMobileMenu(forceState) {
    const shouldOpen =
        typeof forceState === "boolean"
            ? forceState
            : !primaryNav.classList.contains("open");

    primaryNav.classList.toggle("open", shouldOpen);
    navActions.classList.toggle("open", shouldOpen);
    navToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function closeMenuOnNavigation() {
    document.querySelectorAll(".primary-nav a").forEach((link) => {
        link.addEventListener("click", () => {
            toggleMobileMenu(false);
        });
    });
}

function handleResize() {
    if (window.innerWidth > 900) {
        toggleMobileMenu(false);
    }
}

navToggle.addEventListener("click", () => toggleMobileMenu());
window.addEventListener("resize", handleResize);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        toggleMobileMenu(false);
    }
});

closeMenuOnNavigation();
