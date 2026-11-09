import { content } from "../data/content.js";

export function Contact() {
  const action = content.email
    ? `<a class="button button-green" href="mailto:${content.email}">Write me a note <span aria-hidden="true">↗</span></a>`
    : `<p class="contact-caption">I’d love to connect, collaborate, or talk about a good game.</p>`;
  const socials = [["GitHub", content.links.github], ["LinkedIn", content.links.linkedin], ["Devpost", content.links.devpost]].filter(([, url]) => url);
  return `
    <section class="contact section-space" id="contact" aria-labelledby="contact-title"><div class="page-width">
      <div class="section-kicker"><span>05</span> THE GOOD PART STARTS HERE</div>
      <div class="contact-content"><div><p class="eyebrow">A QUESTION, AN IDEA, A FRIENDLY HELLO</p><h2 id="contact-title">Let’s make<br /><em>something matter.</em></h2></div><div class="contact-action">${action}<div class="social-links">${socials.map(([name, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${name} <span aria-hidden="true">↗</span></a>`).join("")}</div></div></div>
      <footer class="site-footer"><a class="brand" href="#home">eqraa<span class="brand-period">.</span></a><p>Made with curiosity <span aria-hidden="true">✿</span> © ${new Date().getFullYear()} ${content.name}</p><a href="#home">Back to the top ↑</a></footer>
    </div></section>
  `;
}
