<script>
	import { PosterCard  } from '$lib/index';

	let { addresses = [] } = $props();
</script>

<ul>
	{#each addresses as address (address.id)}
		<PosterCard
			name={address?.person?.[0]?.last_name ?? 'Onbekend'}
			street={address?.street ?? 'Onbekend'}
			house_number={address?.house_number ?? 'Onbekend'}
			floor={address?.floor}
			addition={address?.addition}
			image={address.poster?.covers?.[0]?.directus_files_id?.id ?? ''}
			width={address?.poster?.covers?.[0]?.directus_files_id?.width ?? 419}
			height={address?.poster?.covers?.[0]?.directus_files_id?.height ?? 585}
			cardClass={$css('carousel-item')}
      id={address?.id ?? ''}
		/>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: row;
		align-items:start;
		gap: var(--spacing-sm);
		overflow-x: auto;
		scroll-snap-type: x mandatory;
    width: 100%;

		/* SCROLLING */
		scroll-snap-type: x mandatory;		
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;

		/* SCROLLBAR */
		scrollbar-width: 0;

		&::-webkit-scrollbar {
			width: 0;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background: transparent;
			border: none;
		}
	}

	.carousel-item {
		flex: 1;
		min-width: 16rem;
		scroll-snap-align: center;
	}
</style>