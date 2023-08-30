export function renderCallout(node, type) {
	const callout = document.createElement("div");
	callout.classList.add("box");
	callout.classList.add(type);
	callout.appendChild(node);
	return callout;
}

export function renderLinkList(items) {
	const listItems = items.map((item) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.innerHTML = item.text;
		a.setAttribute("href", item.target);
		li.appendChild(a);
		return li;
	});
	const ul = document.createElement("ul");
	for (const linkItem of listItems) {
		ul.appendChild(linkItem);
	}
	return ul;
}
