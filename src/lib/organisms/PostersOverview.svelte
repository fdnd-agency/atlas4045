<script>
	import PosterCard from "../molecules/PosterCard.svelte";

	let { posters = [] } = $props();
</script>

{#if posters.length > 0}
	<ul>
		{#each posters as posterData}
			<PosterCard
				name={posterData.person?.[0]?.last_name ?? "Onbekend"}
				street={posterData.street ?? "Onbekend"}
				house_number={posterData.house_number ?? "Onbekend"}
				image={posterData.poster.covers[1].directus_files_id ?? ""}
			/>
		{/each}
	</ul>
{:else}
	<p>Er zijn momenteel geen posters beschikbaar. Kom later terug of neem contact met ons op via de knop bovenin de pagina als dit probleem aanhoudt.</p>
{/if}

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		padding-top: 3rem;
	}
</style>
