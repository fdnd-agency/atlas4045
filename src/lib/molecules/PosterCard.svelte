<script>
	import DirectusImage from "$lib/atoms/DirectusImage.svelte"
  import toRomanNumerals from "$lib/utils/toRomanNumerals"

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
	
	floor = floor ? toRomanNumerals(floor) : ''
</script>

<li class="focus-ring {orientation}">
  <!-- no-focus is added so that the default focus ring is hidden and does not conflict with the custom style -->
	<a href="/" class="no-focus">
    <DirectusImage imageId={image} {width} {height} alt="Gedenkposter van {name}" loading="lazy"/>
		<p class="name">Familie {name}</p>
		<p>{street} {house_number} {floor} {addition}</p>
	</a>
</li>

<style>
	a {
		text-decoration: none;
		color: var(--neutral-900);
	}

	li {
		list-style-type: none;
		display: block;
		width: 100%;
    padding: var(--spacing-xs);
    border-radius: var(--border-radius-md);
	}

	@media screen and (min-width: 800px) {
		li.landscape {
			grid-column: span 2;
		}
  }
  
	p.name {
    margin-top: 0.25rem;
    font-size: var(--font-size-lg);
    font-family: var(--font-family-fraunces);
    font-weight: var(--font-weight-medium);
	}
  
	.focus-ring {
		transition: 0.15s ease-in;
		outline: 0px solid var(--brown-400);
		outline-offset: 0px;

		&:hover, 
    &:focus-visible,
    &:focus-within {
			outline: 2px solid var(--brown-400);
			background: var(--brown-100);
		}
	}
</style>
