import { renderLinkList } from "./render-utils.js";

export function renderSeeAlso(json) {
	if (json["see-also"]) {
		const ul = renderLinkList(json["see-also"]);

		const heading = document.createElement("h2");
		heading.textContent = "See also";
		const container = document.createElement("div");
		container.appendChild(heading);
		container.appendChild(ul);
		return container;
	}
	return null;
}
