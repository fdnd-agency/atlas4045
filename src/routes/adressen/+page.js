import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch, url }) {
  // Initialize the filters
  let streetFilters = [];
  let nameFilters = [];
  let queryFilters = {};

  // Extract the values by key and add them to their respective arrays
  url.searchParams.forEach((value, key) => {
    (key == 's') && (streetFilters.push(value));
    (key == 'n') && (nameFilters.push(value));
  });

  // Add the street filters to the query
	if (streetFilters.length > 0) {
		queryFilters.street = {
			_in: streetFilters
		};
	}

  // Add the name filters to the query  
	if (nameFilters.length > 0) {
		queryFilters.person = {
			_or: [
				{
					first_name: {
						_in: nameFilters
					}
				},
				{
					last_name: {
						_in: nameFilters
					}
				}
			]
		};
	}

  // Define the fields to be fetched
	const queryFields = [
		'id',
		'street',
		'house_number',
		'floor',
		'addition',
		'map',
		{ person: ['first_name', 'last_name'] },
		{
			poster: [
				'id',
				{ covers: ['directus_files_id.id', 'directus_files_id.width', 'directus_files_id.height'] }
			]
		}
	];

  // Get the addresses
	try {
		const directus = getDirectusInstance(fetch);
		return {
			addresses: await directus.request(
				readItems('atlas_address', {
					filter: queryFilters,
					fields: queryFields,
					sort: ['street', 'house_number', 'addition', 'floor']
				})
			),
      streets: await directus.request(
        readItems('atlas_address', {
          fields: ['street']
        })
      )
		};
	} catch (error) {
		console.error(error);
		return {}; // Return empty object if error
	}
}
