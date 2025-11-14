import { html } from "@mastrojs/mastro";

export const Layout = (props) =>
  html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${props.title}</title>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <h1>${props.title}</h1>
        <h2>yoohoo</h2>
        <p>text text</p>
        <a href="https://stadtharmonie.ch/" target="blank">LINK</a>
      </body>
    </html>
  `;
