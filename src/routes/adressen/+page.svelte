<script>
	import PostersOverview from '$lib/organisms/PostersOverview.svelte';
	import Map from '$lib/organisms/Map.svelte';
	import SideFilter from '$lib/organisms/SideFilter.svelte';

	let { data } = $props();
	let mapAddresses = $derived(data.addresses.filter((address) => address.map?.coordinates));
	let filterOpen = $state(false);
</script>

<main class="posters-overview">
	<Map {mapAddresses} />
	<SideFilter bind:filterOpen />
	<PostersOverview addresses={data.addresses} {filterOpen} />
</main>

<style>
	main {
		margin: 0 auto;
		display: grid;
		grid-template-areas:
			'map map'
      'filter header'
			'filter posters';
	}

	:global(main.posters-overview > section) {
		grid-area: map; 
	}

	:global(main.posters-overview > aside) {
		grid-area: filter;
	}

	:global(main.posters-overview > header) {
		grid-area: header;
	}

	:global(main.posters-overview > ul) {
		grid-area: posters;
	}
</style>
