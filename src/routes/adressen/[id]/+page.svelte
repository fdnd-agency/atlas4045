<script>
	import DirectusImage from '$lib/atoms/DirectusImage.svelte';
	import Map from '$lib/organisms/Map.svelte';

	const { data } = $props();
	let mapAddress = data.address;
	const { street, house_number, floor, addition, person, poster } = data.address[0];
	
	let currentCoordinates = $derived([data.address[0].map.coordinates[1], data.address[0].map.coordinates[0]])
	let allCoordinates = $derived(
		data.coordinates
			.filter((currentArray) => {return !(currentArray.map.coordinates[0] === currentCoordinates[0] && currentArray.map.coordinates[1] === currentCoordinates[1])}))
	console.log(allCoordinates)

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

		<Map mapAddresses={data.coordinates} activeMapAddresses={mapAddress} mapClass={$css('map')} initialZoom={20} initialView={currentCoordinates}/>
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
		font-size: var(--font-size-title-md);
		background-color: var(--blue-200);
		width: fit-content;
		padding: var(--spacing-xs);
		margin-left: calc(-1* var(--spacing-xs));
	}

	h2 {
		margin:var(--spacing-md) 0 var(--spacing-xs);
	}

	ul {
		list-style: none;
	}

	ul li {
		font-weight: var(--font-weight-regular) ;
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
		max-width: fit-content;
		min-width: 16rem;
		scroll-snap-align: start;
		margin: auto;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--spacing-md);
		width: 100%;
	}

	article {
		height: fit-content;
		padding: var(--spacing-xs);
	}

	.map {
		height: 50vh !important;
		border-radius: var(--border-radius-md);
		border: 5px solid var(--blue-300);
	}

	@media screen and (min-width: 800px) {
		:global(body) {
			height: 100vh; /* For big screens */
			display: flex;
			align-items: center;
			/* background-color: aquamarine; */
		}
		main {
			flex-wrap: nowrap;
			max-height: calc(100vh - 6rem); /* 6rem = padding top */
			gap: var(--spacing-xl);
			align-self: center;
			width: 100%;
		}

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

	@media screen and (max-aspect-ratio: 1120/898) {
		main {
			/* background-color: aqua; */
			gap: var(--spacing-md);
		}
		
	}

	@container carousel (max-aspect-ratio: 426/620) {
		li {
			/* background-color: aquamarine; */
			width: 100%;
		}


	}
</style>