<script>
	import PosterCard from '$lib/molecules/PosterCard.svelte';

	let { posters = [] } = $props();
</script>

<ul>
	{#each posters as posterData (posterData.id)}
		<PosterCard
			name={posterData.person?.[0]?.last_name ?? 'Onbekend'}
			street={posterData.street ?? 'Onbekend'}
			house_number={posterData.house_number ?? 'Onbekend'}
			floor={posterData?.floor}
			addition={posterData?.addition}
			image={posterData.poster?.covers?.[0]?.directus_files_id?.id ?? ''}
			width={posterData.poster?.covers?.[0]?.directus_files_id?.width ?? 419}
			height={posterData.poster?.covers?.[0]?.directus_files_id?.height ?? 585}
			cardClass={$css('carousel-item')}
		/>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-sm);
		overflow-x: auto;
		scroll-snap-type: x mandatory;
    height: 28rem;
	}

	.carousel-item {
		flex: 1;
		min-width: 16rem;
		scroll-snap-align: center;
	}
</style>
