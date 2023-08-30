export function renderSyntax(json) {
	if (json["syntax-example"]) {
		const pre = document.createElement("pre");
		const code = document.createElement("code");
		pre.classList.add("language-css");
		code.classList.add("language-css");
		code.innerHTML = json["syntax-example"];
		pre.appendChild(code);
		console.log(code);
		return pre;
	}
	return null;
}
