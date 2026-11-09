import { content } from "../data/content.js";

export function Experience() {
  return `
    <section class="experience section-space" id="experience" aria-labelledby="experience-title">
      <div class="page-width">
        <div class="section-kicker"><span>02</span> PEOPLE & COMMUNITIES I SHOW UP FOR</div>
        <div class="experience-heading"><h2 id="experience-title">Making space<br />for <em>community.</em></h2><p>Leadership, communication, and bringing people together.</p></div>
        <div class="experience-list">
          ${content.experience.map((item, index) => `
            <article class="experience-item">
              <span class="experience-number">0${index + 1}</span>
              <div><h3>${item.role}</h3><p class="experience-org">${item.url ? `<a href="${item.url}" target="_blank" rel="noreferrer">${item.organization} <span aria-hidden="true">↗</span></a>` : item.organization}</p><p class="experience-description">${item.description}</p></div>
              <span class="experience-flower" aria-hidden="true">✳</span>
            </article>
          `).join("")}
        </div>
        <div class="education-note"><span>LEARNING & GROWING</span><p>${content.education}</p></div>
      </div>
    </section>
  `;
}
