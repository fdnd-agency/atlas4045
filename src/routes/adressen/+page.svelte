<script>
  import { onMount } from 'svelte';
  import PostersOverview from "$lib/organisms/PostersOverview.svelte"
  import Map from "$lib/organisms/Map.svelte";
	import { on } from 'svelte/events';
  
  let { data } = $props();
  let mapAddresses = $derived(data.addresses.filter(address => address.map?.coordinates));
  
  
  let javascriptEnabled = $state(false);

  onMount(() => {
    javascriptEnabled = true;
  });
</script>

<!-- Overview section -->
<main>
  <Map mapAddresses={mapAddresses} javascriptEnabled={javascriptEnabled}/>
  <PostersOverview addresses={data.addresses} />
</main>

<style>
  main {
    margin: 0 auto;
    padding: var(--spacing-sm) var(--page-padding);
  }
</style>