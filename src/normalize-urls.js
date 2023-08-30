function normalizeURL(match, link) {
	const entry = linkMap[link];
	if (entry) {
		return `href="${entry}.html">`;
	}
	return `href="${link}" target="_blank">`;
}

export function normalizeURLs(markup, linkMap) {
	return markup.replaceAll(
		/href=\"(https:\/\/developer.mozilla.org\/.*?)\">/g,
		normalizeURL,
	);
}
