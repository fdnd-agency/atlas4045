<script>
	import PostersOverview from '$lib/organisms/PostersOverview.svelte';
	import Map from '$lib/organisms/Map.svelte';

	let { data } = $props();
	let mapAddresses = $derived(data.addresses.filter((address) => address.map?.coordinates));
</script>

<main>
	<Map {mapAddresses} />
</main>

<style>
  main {
    margin: 0 auto;
    padding: var(--spacing-sm) var(--page-padding);
  }
</style>