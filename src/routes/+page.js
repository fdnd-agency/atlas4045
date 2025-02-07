import getDirectusInstance from "$lib/directus";
import { readItems } from "@directus/sdk";
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		atlas_person: await directus.request(
			readItems("atlas_address", {
				fields: [
					"id",
					"street",
					"house_number",
					{
						poster: [
							"id",
							{
								covers: ["directus_files_id"]
							}
						]
					}
				]
			})
		)
	};
}
