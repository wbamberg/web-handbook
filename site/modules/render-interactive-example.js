export function renderInteractiveExample(json) {
	if (json["interactive-example"]) {
		const details = document.createElement("details");
		details.classList.add("interactive-example");

		const summary = document.createElement("summary");
		summary.textContent = "Try the interactive example";

		const resizer = document.createElement("div");
		resizer.classList.add("resizer");

		const iframe = document.createElement("iframe");
		iframe.classList.add("resized");
		iframe.setAttribute("height", "400");
		iframe.setAttribute("src", `${json["interactive-example"]}`);
		iframe.setAttribute("title", "MDN Web Docs Interactive Example");
		iframe.setAttribute("loading", "lazy");

		details.appendChild(summary);
		resizer.appendChild(iframe);
		details.appendChild(resizer);

		return details;
	}
	return null;
}
