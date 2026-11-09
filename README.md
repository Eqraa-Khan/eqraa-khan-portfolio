# Eqraa Khan — Portfolio

A small, responsive personal portfolio with a playful pastel palette, illustrated landing scene, and a clear separation between content, components, and presentation. It uses native JavaScript modules without a build step.

## Structure

```text
index.html
assets/
  css/styles.css
  js/main.js
src/
  data/content.js
  components/
    Header.js
    Hero.js
    About.js
    Projects.js
    Contact.js
  app.js
```

## Personalize

Update `src/data/content.js` to change the introduction, about text, skills, contact details, social links, and project cards. Projects accept `name`, `description`, optional `tags`, and optional `url` fields.

Open the site through a local web server so the browser can load ES modules. To publish with GitHub Pages, select the `main` branch and `/ (root)` as the source.
