<script>
	import { PostersOverview, Map, SideFilter } from '$lib/index';

	let { data } = $props();
	let mapAddresses = $derived(data.addresses.filter((address) => address.map?.coordinates));

  // Parse the streets list
	let streets = $derived(
		Array.from(new Set(data.streets.map((item) => item.street.trim()))).sort()
	);
</script>

<svelte:head>
  <title>Atlas Oosterparkbuurt - Adressen</title>
  <meta name="description" content="Atlas Oosterparkbuurt is een website die gedenkposters van de Oosterparkbuurt in Amsterdam bevat. Deze posters zijn gemaakt door vrijwilligers en zijn bedoeld om de joodse slachtoffers van de oorlog in de Oosterparkbuurt te herdenken." />
</svelte:head>


<main class="posters-overview">
	<Map {mapAddresses} mapClass={$css('map')}/>
	<SideFilter {streets} />
	<PostersOverview addresses={data.addresses} />
</main>

<style>
  main {
    margin: 0 auto;
  }

  .map {
	border-bottom: 5px solid var(--blue-300);
  }

	@media screen and (min-width: 800px) {
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