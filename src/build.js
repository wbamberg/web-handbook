import fs from "node:fs/promises";
import stringify from "fast-json-stable-stringify";

import * as prettier from "prettier";

import webDocs from "web-docs-data" assert { type: "json" };
import { createPropertyPageData } from "./make-property-page-data.js";
import { renderMainPage } from "./render-main-page.js";

const properties = webDocs["css"]["properties"];
const propertyNames = Object.keys(properties);

const packagedir = new URL(".", import.meta.url);
const targetdir = new URL("../site/", packagedir);

export async function build() {
  const dest = new URL("web-docs.html", targetdir);
  const mainPage = await renderMainPage("Web Handbook", propertyNames);
  await fs.writeFile(dest, mainPage);

  const pagesdir = new URL("pages", targetdir);
  await fs.mkdir(pagesdir);

  for (const propertyName of propertyNames) {
    const propertyPageData = createPropertyPageData(
      propertyName,
      properties[propertyName]
    );

    const pageDest = new URL(`pages/${propertyName}.json`, targetdir);
    await fs.writeFile(pageDest, stringify(propertyPageData));
  }
}

await build();
