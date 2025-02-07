<script>
	import PosterCard from '../molecules/PosterCard.svelte';

	let { posters } = $props();
</script>

<ul>
	{#each posters as posterData}
		<PosterCard
			name={posterData.family.family_name}
			street={posterData.street}
			house_number={posterData.house_number}
			image={posterData.poster.covers[1].directus_files_id}
		/>
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		padding-top: 3rem;
	}
</style>
