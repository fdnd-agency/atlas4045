import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch, url }) {
  let filters = {};
  
  if (url.searchParams.get('straat')) {
    filters.street = {
      _icontains: url.searchParams.get('straat')
    }
  }
	
	try {
		const directus = getDirectusInstance(fetch);
		return {
			posters: await directus.request(
				readItems('atlas_address', {
					filter: filters,
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
					],
					sort: ['street', 'house_number', 'addition', 'floor']
				})
			)
		};
	} catch (error) {
		console.error(error);
		return {}; // Return empty object if error
	}
}
