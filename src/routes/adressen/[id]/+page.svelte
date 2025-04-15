<script>
	import DirectusImage from '$lib/atoms/DirectusImage.svelte';

	const { data } = $props();
	const { street, house_number, floor, addition, person, poster } = data.address[0];
</script>

<main>
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
	
	<article>
		<h1>{street} {house_number} {addition} {floor}</h1>
		<h2>Personen op dit adres</h2>
	
		<ul>
			{#each person as person}
					<li>{person.first_name} {person.last_name}</li>
			{/each}
		</ul>
	</article>
</main>

<style>
	main {
		display: flex;
		max-height: calc(100vh - 6rem); /* 6rem = padding top */
		padding: var(--spacing-md);
		gap: var(--spacing-xl);
	}

	h1 {
		/* padding:var(--spacing-md) 0; */
		font-size: var(--font-size-title-md);
	}

	h2 {
		margin:var(--spacing-md) 0 var(--spacing-xs);
	}

	ul {
		list-style: none;
	}

	ol {
		width: 100%;
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items:start;
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

	ol li {
		width: fit-content;
		height: 100% !important;
		max-width: auto;
		scroll-snap-align: start;
	}

	ol li :global(img) {
		height: 100% !important;
		width: auto;
	}

	article {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding:var(--spacing-md) 0;
	}
</style>