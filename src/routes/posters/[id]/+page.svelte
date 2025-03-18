<script>
	import DirectusImage from '$lib/atoms/DirectusImage.svelte';

	const { data } = $props();
	const { street, house_number, floor, addition, person, poster } = data.poster[0];
</script>

<main>
	<h1>{street} {house_number} {addition} {floor}</h1>

	{#each poster.covers as image}
		<DirectusImage
			imageId={image.directus_files_id.id}
			width={image.directus_files_id.width}
			height={image.directus_files_id.height}
			alt="Gedenkposter van {street} {house_number} {addition} {floor}}"
		/>
	{/each}

	<h2>Personen op dit adres</h2>

	<ul>
	{#each person as person}
			<li>{person.first_name} {person.last_name}</li>
	{/each}
	</ul>
</main>

<style>
	main {
		padding:var(--spacing-md);
	}

	h1 {
		padding:var(--spacing-md) 0;
	}


	h2 {
		margin:var(--spacing-md) 0 var(--spacing-xs);
	}

	ul {
		list-style: none;
	}
</style>