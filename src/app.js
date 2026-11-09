import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { About } from "./components/About.js";
import { Projects } from "./components/Projects.js";
import { Experience } from "./components/Experience.js";
import { Contact } from "./components/Contact.js";

const app = document.querySelector("#app");
app.innerHTML = `${Header()}<main id="main">${Hero()}${About()}${Experience()}${Projects()}${Contact()}</main>`;

const parallaxItems = document.querySelectorAll("[data-parallax]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (parallaxItems.length && !reduceMotion.matches) {
  let frame = 0;
  window.addEventListener("scroll", () => {
    if (frame) return;
    frame = window.requestAnimationFrame(() => {
      const offset = window.scrollY;
      parallaxItems.forEach((item) => {
        item.style.transform = `translateY(${offset * Number(item.dataset.parallax)}px)`;
      });
      frame = 0;
    });
  }, { passive: true });
}
