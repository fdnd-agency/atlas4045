import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch, url }) {
  let queryFilters = {};
  
  if (url.searchParams.get('straat')) {
    queryFilters.street = {
      _icontains: url.searchParams.get('straat')
    }
  }

  if (url.searchParams.get('naam')) {
    queryFilters.person = {
      '_or': [
        {
          'first_name': {
            '_icontains': url.searchParams.get('naam')
          }
        },
        {
          'last_name': {
            '_icontains': url.searchParams.get('naam')
          }
        }
      ]
    }
  }

  const queryFields = [
    'id',
    'street',
    'house_number',
    'floor',
    'addition',
    { person: ['first_name', 'last_name'] },
    { poster: [
        'id',
        { covers: [
            'directus_files_id.id',
            'directus_files_id.width',
            'directus_files_id.height'
          ]
        }
      ]
    }
  ];
	
	try {
		const directus = getDirectusInstance(fetch);
		return {
			addresses: await directus.request(
				readItems('atlas_address', {
					filter: queryFilters,
					fields: queryFields,
					sort: ['street', 'house_number', 'addition', 'floor']
				})
			)
		};
	} catch (error) {
		console.error(error);
		return {}; // Return empty object if error
	}
}
