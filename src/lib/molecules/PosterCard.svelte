<script>
	import DirectusImage from '$lib/atoms/DirectusImage.svelte';
	import toRomanNumerals from '$lib/utils/toRomanNumerals';

	let {
		name,
		street,
		house_number,
		floor,
		addition,
		image,
		width,
		height,
    id,
		cardClass = ''
	} = $props();

	let orientation = $state('portrait');

	if (width > height) {
		width = 585;
		height = 419;
		orientation = 'landscape';
	} else {
		width = 419;
		height = 585;
	}

	floor = floor ? toRomanNumerals(floor) : '';
</script>

<li class="focus-ring {orientation} {cardClass}">
	<!-- no-focus is added so that the default focus ring is hidden and does not conflict with the custom style -->
	<a href={`/posters/${id}`} class="no-focus">
		<div>
			<DirectusImage imageId={image} {width} {height} alt="Gedenkposter van {name}" loading="lazy" />
		</div>
		
		<div>
			<p class="name">Familie {name}</p>
			<p>{street} {house_number} {floor} {addition}</p>
		</div>
	</a>
</li>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	li {
		list-style-type: none;
		display: block;
		width: 100%;
	}

	li div {
		padding: var(--spacing-xs);
		border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
		transition: 0.25s ease-out;
	}

	li div:last-child {
		border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
	}

	p {
		padding: 0 
	}
	p.name {
		margin-top: 0.25rem;
		font-size: var(--font-size-lg);
		font-family: var(--font-family-fraunces);
		font-weight: var(--font-weight-medium);
	}

	.focus-ring a {
		
		&:hover div,
		&:focus-visible div,
		&:focus-within div {
			background-color: var(--blue-200);
		}

		&:hover div:last-child,
		&:focus-visible div:last-child,
		&:focus-within div:last-child {
			background-color: var(--blue-500);
			color:#fff;
		}
	}
</style>
