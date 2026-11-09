import { content } from "../data/content.js";

export function Projects() {
  const cards = content.projects.map((project, index) => `
    <article class="project-card">
      <div class="project-meta"><span>PROJECT ${String(index + 1).padStart(2, "0")}</span><span aria-hidden="true">✳</span></div>
      <h3>${project.name}</h3><p>${project.description}</p>
      <div class="project-bottom"><div class="project-tags">${(project.tags || []).map((tag) => `<span>${tag}</span>`).join("")}</div>
        ${project.url ? `<a href="${project.url}" target="_blank" rel="noreferrer">Take a look <span aria-hidden="true">↗</span></a>` : ""}
      </div>
    </article>
  `).join("");

  return `
    <section class="projects section-space" id="projects" aria-labelledby="projects-title"><div class="page-width">
      <div class="section-kicker"><span>04</span> SELECTED WORK & IDEAS</div>
      <div class="projects-heading"><h2 id="projects-title">Things I’m <em>making.</em></h2><p>Technology, research, and ideas<br />for a more thoughtful world.</p></div>
      <div class="project-grid">${cards}</div>
    </div></section>
  `;
}
