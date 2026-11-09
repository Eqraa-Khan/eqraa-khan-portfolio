import { content } from "../data/content.js";

export function About() {
  return `
    <section class="about section-space" id="about" aria-labelledby="about-title">
      <div class="page-width">
        <div class="section-kicker"><span>01</span> A LITTLE ABOUT ME</div>
        <div class="about-grid"><h2 id="about-title">Curious by nature.<br /><em>People-first</em> by design.</h2>
          <div class="about-copy">${content.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            <div class="interest-tags" aria-label="Skills and interests">${content.skills.map((skill) => `<span>${skill}</span>`).join("")}</div>
          </div>
        </div>
        <div class="about-doodle" aria-hidden="true">✳ <span>always becoming</span> ✳</div>
        <div class="recognition-note"><span>A LITTLE MILESTONE</span><p>${content.recognition}</p></div>
      </div>
    </section>
  `;
}
