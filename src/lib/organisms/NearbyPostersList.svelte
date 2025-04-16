<script>
    import { onMount, onDestroy } from 'svelte';
    import { GeolocationTracker } from '$lib/utils/GeolocationTracker.js';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import toRomanNumerals from '$lib/utils/toRomanNumerals.js';

    let nearbyAddresses = [];
    let allAddresses = [];
    let error = null;
    let watchId = null;
    let openedAddressId = null;

    $: {
        const match = $page.url.pathname.match(/\/adressen\/(\d+)/);
        openedAddressId = match ? Number(match[1]) : null;

        // Re-filter nearby locations based on the openedAddressId
        if (allAddresses.length > 0) {
            if (openedAddressId !== null) {
                nearbyAddresses = allAddresses.filter((location) => location.id !== openedAddressId);
            } else {
                nearbyAddresses = [...allAddresses]; // Restore all locations when no location is opened
            }
        }
    }

    onMount(() => {
        let tracker;
        try {
            tracker = new GeolocationTracker();
        } catch (err) {
            error = err.message;
            return;
        }

        watchId = tracker.trackPosition(
            async (err, position) => {
                if (err) {
                    error = err.message;
                } else {
                    await updateNearbyLocations(position.coords, tracker);
                }
            }
        );
    });

    onDestroy(() => {
        if (watchId !== null) {
            const tracker = new GeolocationTracker();
            tracker.clearWatch(watchId);
        }
    });

    async function updateNearbyLocations(coords, tracker) {
        try {
            const locations = await tracker.findNearbyLocations(coords);
            allAddresses = locations.map(location => ({
                ...location,
                floor: location.floor ? toRomanNumerals(location.floor) : ''
            }));

            // Filter out the currently opened location
            nearbyAddresses = allAddresses.filter((location) => location.id !== openedAddressId);
        } catch (err) {
            error = err.message;
        }
    }

    function navigateToLocation(locationId) {
        goto(`/adressen/${locationId}`);
    }
</script>

<div>
    <h2>Nabijgelegen posters</h2>
    {#if nearbyAddresses.length > 0}
        <ul>
            {#each nearbyAddresses as address}
                <button type="button" on:click={() => navigateToLocation(address.id)} class="list-item">
                    Familie {address.lastName} | {address.street} {address.house_number} {address.floor} {address.addition}
                </button>
            {/each}
        </ul>
    {:else if error}
        <p>Error: {error}</p>
    {:else}
        <p>Er zijn geen posters in de buurt!</p>
    {/if}
</div>

<style>
    div {
        padding: 1rem;
        background-color: #c6b9b9;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .list-item {
        display: block;
        width: 100%;
        text-align: left;
        cursor: pointer;
        padding: 0.75rem 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 0.5rem;
        transition: background-color 0.3s, box-shadow 0.3s;
        background-color: #ffffff;
        font-size: 1rem;
        font-weight: 500;
        color: #333;
    }

    .list-item:hover {
        background-color: #f0f8ff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-color: #007bff;
        color: #007bff;
    }

    .list-item:active {
        background-color: #e6f2ff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>