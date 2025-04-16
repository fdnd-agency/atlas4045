import { json } from '@sveltejs/kit';
import { readItems } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

export async function GET({ fetch }) {
    try {
        const directus = getDirectusInstance(fetch);

        const posterAddresses = await directus.request(
            readItems('atlas_address', {
                fields: ['id', 'street', 'house_number', 'floor', 'addition', 'map', { person: ['last_name'] }]
            })
        );

        const transformedAddresses = posterAddresses.map(addresses => {
            const [longitude, latitude] = addresses.map?.coordinates;
            return {
                id: addresses.id,
                latitude: latitude,
                longitude: longitude,
                street: addresses.street,
                house_number: addresses.house_number,
                floor: addresses.floor,
                addition: addresses.addition,
                lastName: addresses.person?.[0]?.last_name
            };
        });

        return json(transformedAddresses);
    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }
}