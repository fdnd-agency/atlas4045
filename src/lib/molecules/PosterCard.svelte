<script>
	import Image from "$lib/atoms/DirectusImage.svelte";

	let { name, street, house_number, image } = $props();
</script>

<li>
	<a href="/">
    <Image imageId="{image}" alt="Gedenkposter van {name}" loading="lazy"/>
		<p class="name">{name}</p>
		<p>{street} {house_number}</p>
	</a>
</li>

<style>
	a {
		text-decoration: none;
		color: var(--color-brown-dark);
	}

	/* This will become img once images are there */
	img {
		width: 100%;
		height: auto;
		aspect-ratio: 3/2;
	}

	li {
		list-style-type: none;
		display: block;
		width: 100%;
	}

	p.name {
		margin-top: 0.25rem;
    font-weight: var(--font-weight-bold);
	}
</style>
