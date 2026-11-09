import { content } from "../data/content.js";

export function Projects() {
  const cards = content.projects.length
    ? content.projects.map((project, index) => `
      <article class="project-card">
        <div class="project-meta"><span>IDEA NO. ${String(index + 1).padStart(2, "0")}</span><span aria-hidden="true">✳</span></div>
        <h3>${project.name}</h3><p>${project.description}</p>
        <div class="project-bottom"><div class="project-tags">${(project.tags || []).map((tag) => `<span>${tag}</span>`).join("")}</div>
          ${project.url ? `<a href="${project.url}" target="_blank" rel="noreferrer">Take a look <span aria-hidden="true">↗</span></a>` : ""}
        </div>
      </article>
    `).join("")
    : `<article class="project-card project-coming"><span class="coming-flower" aria-hidden="true">✿</span><div><span class="project-meta">THE NEXT THING</span><h3>Something is growing.</h3><p>My project shelf is getting ready for its first stories. Until then, come say hi over on GitHub.</p><a href="${content.links.github}" target="_blank" rel="noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a></div></article>`;

  return `
    <section class="projects section-space" id="projects" aria-labelledby="projects-title"><div class="page-width">
      <div class="section-kicker"><span>02</span> MY LITTLE CORNER OF THE INTERNET</div>
      <div class="projects-heading"><h2 id="projects-title">Things I’m <em>making.</em></h2><p>Experiments, ideas, and small steps<br />toward something useful.</p></div>
      <div class="project-grid">${cards}</div>
    </div></section>
  `;
}
