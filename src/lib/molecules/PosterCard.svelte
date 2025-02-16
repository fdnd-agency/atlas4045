<script>
	import Image from "$lib/atoms/DirectusImage.svelte";

	let { name, street, house_number, floor, addition, image } = $props();

	floor = floor ? toRoman(floor) : '';

	function toRoman(floor) {
		switch (floor) {
			case 1:
				return 'I';
			case 2:
				return 'II';
			case 3:
				return 'III';
			default:
				return '';
		}
	}
</script>

<li class="focus-ring">
  <!-- no-focus is added so that the default focus ring is hidden and does not conflict with the custom style-->
	<a href="/" class="no-focus">
    <Image imageId={image} alt="Gedenkposter van {name}" loading="lazy"/>
		<p class="name">Familie {name}</p>
		<p>{street} {house_number} {floor} {addition}</p>
	</a>
</li>

<style>
	a {
		text-decoration: none;
		color: var(--brown-dark);
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
