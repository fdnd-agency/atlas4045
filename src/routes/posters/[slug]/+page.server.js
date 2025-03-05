import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch, params }) {
	try {
		const directus = getDirectusInstance(fetch);
		return {
			poster: await directus.request(
				readItems('atlas_address', {
          filter: {
            slug: {
              _eq: params.slug
            },
          },
					fields: [
						'id',
						'street',
						'house_number',
						'floor',
						'addition',
						{
							person: ['first_name', 'last_name']
						},
						{
							poster: [
								'id',
								{
									covers: [
										'directus_files_id.id',
										'directus_files_id.width',
										'directus_files_id.height'
									]
								}
							]
						}
					]
				})
			)
		};
	} catch (error) {
		console.error(error);
		return {}; // Return empty object if error
	}
}
