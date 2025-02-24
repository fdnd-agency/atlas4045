<script>
	import DirectusImage from "$lib/atoms/DirectusImage.svelte"

	let { name, street, house_number, floor, addition, image, width, height } = $props()

	let orientation = $state('portrait')

	if (width > height) {
		width = 585
		height = 419
		orientation = 'landscape'

	} else {
		width = 419
		height = 585
	}
	
	floor = floor ? toRoman(floor) : ''

	function toRoman(floor) {
		switch (floor) {
			case 1:
				return 'I'
			case 2:
				return 'II'
			case 3:
				return 'III'
			default:
				return ''
		}
	}
</script>

<li class="focus-ring {orientation}">
  <!-- no-focus is added so that the default focus ring is hidden and does not conflict with the custom style-->
	<a href="/" class="no-focus">
    <DirectusImage imageId={image} {width} {height} alt="Gedenkposter van {name}" loading="lazy"/>
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

	@media screen and (min-width: 800px) {
		li.landscape {
			grid-column: span 2;
		}
  }

	p.name {
		margin-top: 0.25rem;
    font-weight: var(--font-weight-bold);
	}

	.focus-ring {
		transition: 0.15s ease-in-out;
		outline: 0px solid var(--brown-neutral);
		outline-offset: var(--spacing-xxs);

		&:hover,&:focus-visible, &:focus-within {
			outline: none;
			background:var(--brown-neutral);
			padding:.5rem;
			border-radius:var(--border-radius-md);

			p {
				color:var(--white);
			}
		}

	}
</style>
