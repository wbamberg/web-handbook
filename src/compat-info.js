import bcd from "@mdn/browser-compat-data" assert { type: "json" };

const browsersToOmit = ["ie", "oculus"];

function getSupportForItem(compatQuery) {
	const pathItems = compatQuery.split(".");
	let data = bcd;
	for (const item of pathItems) {
		data = data[item];
	}

	return data?.["__compat"]?.["support"];
}

export function getCompatInfo(compatQuery) {
	if (!compatQuery) {
		return null;
	}
	const support = getSupportForItem(compatQuery);
	if (!support) {
		return null;
	}

	const browsersWithoutSupport = [];
	const browsersWithPartialSupport = [];
	for (const engine of Object.keys(support)) {
		if (browsersToOmit.includes(engine)) {
			continue;
		}
		if (support[engine]["version_added"] === false) {
			browsersWithoutSupport.push(engine);
		}
		if (support[engine]["partial_implementation"]) {
			browsersWithPartialSupport.push(engine);
		}
	}

	return {
		unsupported: browsersWithoutSupport.map(
			(engine) => bcd["browsers"][engine]["name"],
		),
		"partially-supported": browsersWithPartialSupport.map(
			(engine) => bcd["browsers"][engine]["name"],
		),
	};
}
