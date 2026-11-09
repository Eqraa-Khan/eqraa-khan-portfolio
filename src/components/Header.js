import { content } from "../data/content.js";

export function Header() {
  return `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="${content.name}, home"><span class="brand-flower" aria-hidden="true">✿</span> eqraa<span class="brand-period">.</span></a>
      <nav class="site-nav" aria-label="Main navigation">
        <a href="#about">About</a><a href="#projects">Projects</a>
        <a class="nav-contact" href="#contact">Say hello <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  `;
}
