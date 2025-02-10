<script>
	import PosterCard from "../molecules/PosterCard.svelte";

	let { posters = "" } = $props();
</script>

{#if posters != typeof String && posters.length > 0}
	<ul>
		{#each posters as posterData}
			<PosterCard
				name={posterData.family.family_name ?? "Onbekend"}
				street={posterData.street ?? "Onbekend"}
				house_number={posterData.house_number ?? "Onbekend"}
				image={posterData.poster.covers[1].directus_files_id ?? ""}
			/>
		{/each}
	</ul>
{:else}
	<p>Geen posters gevonden</p>
{/if}

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		padding-top: 3rem;
	}
</style>
