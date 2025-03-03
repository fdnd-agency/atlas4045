<script>
	import PosterCard from '../molecules/PosterCard.svelte';
	import PostersFilter from '$lib/organisms/PostersFilter.svelte';

	let { posters = [] } = $props();
</script>

<PostersFilter />

{#await posters}
	<p>Loading posters...</p>
{:then posters}
	{#if posters.length > 0}
		<ul>
			{#each posters as posterData}
				<PosterCard
					name={posterData.person?.[0]?.last_name ?? 'Onbekend'}
					street={posterData.street ?? 'Onbekend'}
					house_number={posterData.house_number ?? 'Onbekend'}
					floor={posterData?.floor}
					addition={posterData?.addition}
					image={posterData.poster?.covers?.[0]?.directus_files_id?.id ?? ''}
					width={posterData.poster?.covers?.[0]?.directus_files_id?.width ?? 419}
					height={posterData.poster?.covers?.[0]?.directus_files_id?.height ?? 585}
				/>
			{/each}
		</ul>
	{:else}
		<p>
			Er zijn momenteel geen posters beschikbaar. Kom later terug of neem contact met ons op via de
			knop bovenin de pagina als dit probleem aanhoudt.
		</p>
	{/if}
{:catch error}
	<p>error loading posters: {error.message}</p>
{/await}

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
		padding-top: 3rem;
	}
</style>
