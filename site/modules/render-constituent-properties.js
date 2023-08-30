import { renderLinkList } from "./render-utils.js";

export function renderConstituentProperties(json) {
	if (json["constituent-properties"]) {
		const ul = renderLinkList(json["constituent-properties"]);

		const p = document.createElement("p");
		p.textContent =
			"This property is a shorthand for the following properties:";
		const container = document.createElement("div");
		container.appendChild(p);
		container.appendChild(ul);
		return container;
	}
	return null;
}
