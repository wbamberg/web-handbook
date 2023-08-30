function renderList(items) {
	const ul = document.createElement("ul");

	for (const item of items) {
		const li = document.createElement("li");
		li.textContent = item;
		li.classList.add("browser-note");
		li.classList.add(item.split(" ")[0].toLowerCase());
		ul.appendChild(li);
	}

	return ul;
}

export function renderCompatNote(compat) {
	if (!compat) {
		return null;
	}
	const unsupported = compat["unsupported"];
	const partiallySupported = compat["partially-supported"];

	if (unsupported.length === 0 && partiallySupported.length === 0) {
		return null;
	}

	const container = document.createElement("div");

	if (unsupported.length > 0) {
		const p = document.createElement("p");
		p.textContent = "Not supported in:";
		container.appendChild(p);
		container.appendChild(renderList(unsupported));
	}

	if (partiallySupported.length > 0) {
		const p = document.createElement("p");
		p.textContent = "Partially supported in:";
		container.appendChild(p);
		container.appendChild(renderList(partiallySupported));
	}

	return container;
}
