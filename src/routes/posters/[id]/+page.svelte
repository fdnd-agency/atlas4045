<script>
	import DirectusImage from '$lib/atoms/DirectusImage.svelte';

	const { data } = $props();
	const { street, house_number, floor, addition, person, poster } = data.poster[0];
</script>

<h1>{street} {house_number} {addition} {floor}</h1>

{#each poster.covers as image}
	<DirectusImage
		imageId={image.directus_files_id.id}
		width={image.directus_files_id.width}
		height={image.directus_files_id.height}
		alt="Gedenkposter van {street} {house_number} {addition} {floor}}"
	/>
{/each}

{#each person as person}
    <h2>{person.first_name} {person.last_name}</h2>
{/each}