<script>
	import { Hero, SuggestedPosters } from '$lib/index';
	let { data } = $props();
</script>

<svelte:head>
  <title>Atlas Oosterparkbuurt - Homepagina</title>
  <meta name="description" content="Atlas Oosterparkbuurt is een website die gedenkposters van de Oosterparkbuurt in Amsterdam bevat. Deze posters zijn gemaakt door vrijwilligers en zijn bedoeld om de joodse slachtoffers van de oorlog in de Oosterparkbuurt te herdenken." />
</svelte:head>

<main>
	<Hero />
	<SuggestedPosters addresses={data.addresses} />
</main>

<style>
	main {
		margin: 0 auto;
	}
</style>