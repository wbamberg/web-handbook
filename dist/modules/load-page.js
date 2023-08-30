import { renderInteractiveExample } from "../modules/render-interactive-example.js";
import { renderCallout } from "../modules/render-utils.js";
import { renderSyntax } from "../modules/render-syntax.js";
import { renderConstituentProperties } from "../modules/render-constituent-properties.js";
import { renderCompatNote } from "../modules/render-compat-note.js";
import { renderStatus } from "../modules/render-status.js";
import { renderSeeAlso } from "../modules/render-see-also.js";

const container = document.querySelector(".container");
const main = document.querySelector("main");

export async function loadPage(name) {
  //wtf
  container.scrollTo(0, 0);
  main.scrollTo(0, 0);
  const url = `pages/${name}.json`;
  const request = await fetch(url);
  const data = await request.json();

  main.innerHTML = "";

  const heading = document.querySelector("h1");
  heading.textContent = `${data["name"]}`;

  const statusNote = renderStatus(data["status"]);
  if (statusNote) {
    const statusNoteCallout = renderCallout(statusNote, "warning");
    main.appendChild(statusNoteCallout);
  }

  const compatNote = renderCompatNote(data["compat"]);
  if (compatNote) {
    const compatNoteCallout = renderCallout(compatNote, "warning");
    main.appendChild(compatNoteCallout);
  }

  const summary = document.createElement("p");
  summary.innerHTML = data["summary"];
  main.appendChild(summary);

  const constituentProperties = renderConstituentProperties(data);
  if (constituentProperties) {
    main.appendChild(constituentProperties);
  }

  const interactiveExample = renderInteractiveExample(data);
  if (interactiveExample) {
    const interactiveExampleCallout = renderCallout(
      interactiveExample,
      "callout"
    );
    main.appendChild(interactiveExampleCallout);
  }

  const syntaxExample = renderSyntax(data);
  if (syntaxExample) {
    const syntaxHeading = document.createElement("h2");
    syntaxHeading.textContent = "Syntax";
    main.appendChild(syntaxHeading);
    main.appendChild(syntaxExample);
    Prism.highlightElement(syntaxExample);
  }

  const seeAlso = renderSeeAlso(data);
  if (seeAlso) {
    main.appendChild(seeAlso);
  }
}
