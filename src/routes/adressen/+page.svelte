<script>
	import PostersOverview from '$lib/organisms/PostersOverview.svelte';
	import Map from '$lib/organisms/Map.svelte';
	import SideFilter from '$lib/organisms/SideFilter.svelte';

	let { data } = $props();
	let mapAddresses = $derived(data.addresses.filter((address) => address.map?.coordinates));

  // Parse the streets list
	let streets = $derived(
		Array.from(new Set(data.streets.map((item) => item.street.trim()))).sort()
	);
</script>

<main class="posters-overview">
	<Map {mapAddresses} />
	<SideFilter {streets} />
	<PostersOverview addresses={data.addresses} />
</main>

<style>
  main {
    margin: 0 auto;
  }

	@media screen and (min-width: 460px) {
		main {
			margin: 0 auto;
			display: grid;
			grid-template-areas:
				'filter map'
				'filter posters';
      grid-template-columns: auto 1fr;
			min-height: 100vh;
		}

		main :global(section.map) {
			grid-area: map;
		}

		main :global(aside) {
			grid-area: filter;
		}

		main :global(section.overview) {
			grid-area: posters;
		}
	}
</style>
