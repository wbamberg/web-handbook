export function renderStatus(status) {
	const statusNames = {
		deprecated: "Deprecated",
		"non-standard": "Non-standard",
	};

	// ignore "experimental", as it is covered by compat
	status = status.filter((item) => Object.keys(statusNames).includes(item));
	if (status.length === 0) {
		return null;
	}

	const p = document.createElement("p");
	p.textContent = status.map((item) => statusNames[item]).join(" | ");

	return p;
}
