<script>
	import { DirectusImage } from '$lib/index';

	let { poster, street, house_number, addition, floor } = $props();
</script>

<ol>
	{#each poster.covers as image}
		<li>
			<DirectusImage
				imageId={image.directus_files_id.id}
				width={image.directus_files_id.width}
				height={image.directus_files_id.height}
				alt="Gedenkposter van {street} {house_number} {addition} {floor}}"
			/>
		</li>
	{/each}
</ol>

<style>
	ol {
		width: 100%;
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: start;
		gap: var(--spacing-sm);
		align-items: start;

		/* SCROLLING */
		overflow-y: hidden;
		overflow-x: auto;
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

	li {
		max-width: fit-content;
		min-width: 16rem;
		scroll-snap-align: start;
		margin: auto;
	}

  @media screen and (min-width: 800px) {
		ol {
			container-type: size;
			container-name: carousel;
		}

		ol li {
			width: 100%;
			height: 100% !important;
			min-width: unset;
		}

		ol li :global(img) {
			height: 100% !important;
			width: auto;
		}
  }
</style>