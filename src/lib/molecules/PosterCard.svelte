<script>
	import Debug from '$lib/atoms/Debug.svelte';

	let { name, street, house_number, image } = $props();
</script>

<li>
	<a href="/">
		<img
			src="https://fdnd-agency.directus.app/assets/{image}?fit=cover&width=400&height=300"
			alt="Gedenkposter van {name}"
		/>
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
