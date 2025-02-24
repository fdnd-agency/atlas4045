import getDirectusInstance from '$lib/directus'
import { readItems } from '@directus/sdk'
export async function load({ fetch }) {
	try {
		const directus = getDirectusInstance(fetch)
		return {
			posters: await directus.request(
				readItems('atlas_address', {
					fields: [
						'id',
						'street',
						'house_number',
						'floor',
						'addition',
						{
							person: [
                'first_name',
                'last_name'
              ]
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
					sort: ['street', 'house_number','addition', 'floor' ]
				})
			)
		}
	} catch (error) {
		console.error(error)
		return {} // Return empty object if error
	}
}
