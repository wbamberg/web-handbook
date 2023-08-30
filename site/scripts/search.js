const searchBox = document.querySelector("#site-search");
const sidebar = document.querySelector("#nav");

const sidebarLinks = Array.from(sidebar.querySelectorAll("a"));

searchBox.addEventListener("input", () => {
	const linksToHide = sidebarLinks.filter((link) => {
		return !link.textContent.startsWith(searchBox.value);
	});
	const linksToShow = sidebarLinks.filter((link) => {
		return link.textContent.startsWith(searchBox.value);
	});
	for (const link of linksToHide) {
		link.parentNode.hidden = true;
	}
	for (const link of linksToShow) {
		link.parentNode.hidden = false;
	}
});

const observer = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.type === "attributes") {
			if (mutation.attributeName === "hidden") {
				console.log(mutation);
				if (!sidebar.hidden) {
					searchBox.value = "";
					for (const link of sidebarLinks) {
						link.parentNode.hidden = false;
					}
					searchBox.focus();
				}
			}
		}

		console.log(mutation.target);
	});
});

observer.observe(sidebar, {
	attributes: true,
});
