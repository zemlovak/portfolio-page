import { createNavigation } from "./navigation.js";
import { createHeroeSection } from "./heroe-section.js";
import { createProjectSection } from "./projects-section.js";
import { createBackToTop } from "./back-to-top.js";
import { createAboutSection } from "./about-section.js";
import { createContactSection } from "./contact-section.js";
import { createFooter } from "./footer.js";

// Initialize EmailJS
emailjs.init("r09_NugPCEU0lmx4f");

const body = document.getElementById("body");
const navbar = document.getElementById("navbar");
const heroeSection = document.getElementById("heroe-section");
const projectSection = document.getElementById("projects-section");
const aboutSection = document.getElementById("about-section");
const contactSection = document.getElementById("contact-section");
const footer = document.getElementById("footer");

// --- back to top button ---
const backToTop = createBackToTop();
body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  const heroSection = document.getElementById("heroe-section");

  const heroBottom = heroSection.getBoundingClientRect().bottom;

  if (heroBottom < 0) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

// --- navbar ---
const hireMeBtn = document.createElement("button");

hireMeBtn.innerHTML = "Hire me";
hireMeBtn.setAttribute("href", "#contact-section");
hireMeBtn.classList.add("cta-btn");

hireMeBtn.addEventListener("click", () => {
  document
    .getElementById("contact-section")
    .scrollIntoView({ behavior: "smooth" });
});

const navigation = createNavigation();

navbar.appendChild(navigation);
navbar.appendChild(hireMeBtn);

// --- heroe section ---
const heroeTextContent = createHeroeSection();
heroeSection.appendChild(heroeTextContent);

// --- projects section ---
const projectsContent = createProjectSection();
projectSection.appendChild(projectsContent);

// --- about section ---
const aboutContent = createAboutSection();
aboutSection.appendChild(aboutContent);

// --- contact section ---
const contactContent = createContactSection();
contactSection.appendChild(contactContent);

// --- footer ---
const footerContent = createFooter();
footer.appendChild(footerContent)
