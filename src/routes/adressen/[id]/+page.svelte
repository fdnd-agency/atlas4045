<script>
	import { Map, DetailsCarousel, AddressDetailInfo } from '$lib/index';

	const { data } = $props();
	let mapAddress = data.address;
	const { street, house_number, floor, addition, person, poster } = $derived(data.address[0]);

	let currentCoordinates = $derived([
		data.address[0].map.coordinates[1],
		data.address[0].map.coordinates[0]
	]);
  
	let allCoordinates = $derived(
		data.coordinates.filter((currentArray) => {
			return !(
				currentArray.map.coordinates[0] === currentCoordinates[0] &&
				currentArray.map.coordinates[1] === currentCoordinates[1]
			);
		})
	);
</script>

<svelte:head>
	<title
		>Atlas Oosterparkbuurt - {street} {house_number} {floor ? '-' : ''} {floor} {addition}</title
	>
	<meta
		name="description"
		content="Atlas Oosterparkbuurt is een website die gedenkposters van de Oosterparkbuurt in Amsterdam bevat. Deze posters zijn gemaakt door vrijwilligers en zijn bedoeld om de joodse slachtoffers van de oorlog in de Oosterparkbuurt te herdenken."
	/>
</svelte:head>

<main>
	<DetailsCarousel {poster} {street} {house_number} {addition} {floor} />

	<section>
	  <AddressDetailInfo {street} {house_number} {addition} {floor} {person} />

		<Map
			mapAddresses={data.coordinates}
			activeMapAddresses={mapAddress}
			mapClass={$css('map')}
			initialZoom={20}
			initialView={currentCoordinates}
		/>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		padding: var(--spacing-md);
		gap: var(--spacing-md);
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--spacing-md);
		width: 100%;
	}

	.map {
		max-height: 50vh;
		border-radius: var(--border-radius-md);
		border: 5px solid var(--blue-300);
	}

	@media screen and (min-width: 800px) {
		main {
			flex-wrap: nowrap;
			max-height: calc(100vh - 6rem); /* 6rem = padding top */
			gap: var(--spacing-xl);
			align-self: center;
			width: 100%;
		}

		@media screen and (max-aspect-ratio: 1120/898) {
			main {
				gap: var(--spacing-md);
			}
		}

		@media screen and (max-aspect-ratio: 1271/1273) {
			main {
				max-height: 50rem;
			}

			.map {
				max-height: 30vh;
			}
		}

		@container carousel (max-aspect-ratio: 426/620) {
			:global(li) {
				width: 100%;
			}
		}
	}
</style>
