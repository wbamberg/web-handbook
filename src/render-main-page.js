import * as prettier from "prettier";

function head(name) {
  return `
    <head>
        <title>${name}</title>
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link href="styles/style.css" rel="stylesheet" /> 
        <link href="styles/prism.css" rel="stylesheet" /> 
        <link href="styles/prism-overrides.css" rel="stylesheet" /> 
        <script src="scripts/prism.js" defer></script>
        <script type="module" src="scripts/main.js" defer></script>
        <script type="module" src="scripts/search.js" defer></script>
        <script type="module" src="modules/load-page.js"></script>
        <script type="module" src="modules/render-interactive-example.js"></script>
        <script type="module" src="modules/render-syntax.js"></script>
        <script type="module" src="modules/render-utils.js"></script>
        <script type="module" src="modules/render-constituent-properties.js"></script>
        <script type="module" src="modules/render-compat-note.js"></script>
        <script type="module" src="modules/render-status.js"></script>
        <script type="module" src="modules/render-see-also.js"></script>
    </head>\n`;
}

function renderHeader() {
  return `<header><button id="open-nav"><img src="icons/bitsies-book.png"></button><h1>Web Docs Handbook</h1></header>`;
}

function renderSidebar(items) {
  const listItems = items
    .map((prop) => `<li><a href="${prop}.html"><code>${prop}</code></a></li>`)
    .join("\n");

  const searchBox = `<label class="visually-hidden" for="site-search">Search the site:</label>
	<input type="search" id="site-search" placeholder="Search"/>`;
  return `
	<nav id="nav" hidden>${searchBox}<div id="sidebar-title">CSS properties</div><ul>${listItems}</ul></nav>`;
}

export async function renderMainPage(name, propertyNames) {
  const headerMarkup = renderHeader();
  const sidebarMarkup = renderSidebar(propertyNames);
  const mainContentMarkup =
    "<main><p>I'm not sure what to put here yet. Try clicking on the book icon ^</p></main>";
  const unformatted = `<!doctype html>
      <html>${head(name)}
        <body>
        ${headerMarkup}
        <div class="container">${sidebarMarkup}${mainContentMarkup}</div>
        </body>
      </html>`;
  return prettier.format(unformatted, {
    parser: "html",
  });
}
