<script>
	import PostersOverview from '$lib/organisms/PostersOverview.svelte';
	import Map from '$lib/organisms/Map.svelte';
	import SideFilter from '$lib/organisms/SideFilter.svelte';

	let { data } = $props();
	let mapAddresses = $derived(data.addresses.filter((address) => address.map?.coordinates));
	let filterOpen = $state(false);

	let streets = $derived(
		Array.from(new Set(data.streets.map((item) => item.street.trim()))).sort()
	);
</script>

<main class="posters-overview">
	<Map {mapAddresses} />
	<SideFilter bind:filterOpen {streets} />
	<PostersOverview addresses={data.addresses} {filterOpen} />
</main>

<style>
	main {
		margin: 0 auto;
		display: grid;
		grid-template-areas:
			'map map'
			'filter posters'
			'filter posters';
		min-height: 100vh;
	}

	:global(main.posters-overview > section.map) {
		grid-area: map;
	}

	:global(main.posters-overview > aside) {
		grid-area: filter;
	}

	:global(main.posters-overview > section.overview) {
		grid-area: posters;
	}
</style>
