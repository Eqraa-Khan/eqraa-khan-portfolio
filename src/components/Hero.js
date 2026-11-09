import { content } from "../data/content.js";

export function Hero() {
  return `
    <section class="hero page-width" id="home" aria-labelledby="hero-title">
      <div class="hero-copy" data-parallax="0.035">
        <p class="eyebrow"><span class="sparkle" aria-hidden="true">✳</span> ${content.role} <span class="eyebrow-divider">/</span> currently exploring</p>
        <h1 id="hero-title">${content.greeting}<br /><span class="hero-name">I’m ${content.name.split(" ")[0]}.</span></h1>
        <p class="hero-intro">${content.intro}</p>
        <div class="hero-links"><a class="button button-green" href="#projects">Come explore <span aria-hidden="true">↓</span></a><a class="quiet-link" href="#about">A little about me <span aria-hidden="true">↗</span></a></div>
        <div class="hero-note"><span class="note-line"></span> SCROLL A LITTLE, STAY A WHILE</div>
      </div>
      <div class="hero-scene" aria-label="A playful abstract illustration of a blooming flower">
        <div class="scene-sun" data-parallax="-0.045"></div><div class="scene-orbit orbit-a"></div><div class="scene-orbit orbit-b"></div>
        <div class="flower flower-back" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><b></b></div>
        <div class="flower flower-front" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><b></b></div>
        <div class="scene-sticker sticker-top"><span>MAKE</span><strong>good<br />things</strong><i>↗</i></div>
        <div class="scene-sticker sticker-bottom"><span>NOTE TO SELF</span><strong>stay curious</strong><i>✳</i></div>
        <span class="scene-caption">a work in progress <span>✿</span></span>
      </div>
    </section>
  `;
}
