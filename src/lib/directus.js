import { createDirectus, rest } from "@directus/sdk"

function getDirectusInstance(fetch) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus("https://fdnd-agency.directus.app", options).with(rest())
	return directus
}

export default getDirectusInstance