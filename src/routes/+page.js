import getDirectusInstance from "$lib/directus";
import { readItems } from "@directus/sdk";
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		posters: await directus.request(
			readItems("atlas_address", {
				fields: [
					"id",
					"street",
					"house_number",
          {
            family: [
              "family_name",
            ]
          },
					{
						poster: [
							"id",
							{
								covers: ["directus_files_id"]
							}
						]
					},
				]
			})
		)
	};
}
