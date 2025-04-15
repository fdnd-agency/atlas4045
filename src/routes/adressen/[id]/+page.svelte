<script>
	import DirectusImage from '$lib/atoms/DirectusImage.svelte';
	import Map from '$lib/organisms/Map.svelte';

	const { data } = $props();
	let mapAddress = data.address;
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
	
	<section>
		<article>
			<h1>{street} {house_number} {addition} {floor}</h1>
			<h2>Personen op dit adres</h2>
			<ul>
				{#each person as person}
						<li>{person.first_name} {person.last_name}</li>
				{/each}
			</ul>
		</article>

		<Map mapAddresses={mapAddress} mapClass={$css('map')}/>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		padding: var(--spacing-md);
		gap: var(--spacing-md);
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
		max-width: auto;
		min-width: 16rem;
		scroll-snap-align: start;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		width: 100%;
		padding:var(--spacing-md) 0;
	}

	.map {
		height: 100%;
		border-radius: 4rem;
	}

	@media screen and (min-width: 800px) {
		main {
			flex-wrap: nowrap;
			max-height: calc(100vh - 6rem); /* 6rem = padding top */
			gap: var(--spacing-xl);
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