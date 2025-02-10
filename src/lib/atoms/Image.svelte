<!-- This component should be used when rendering an image from the Directus backend to automatically optimise it -->

<script>
	let { src = '', alt = 'Placeholder', width = 400, height = 300 } = $props();
  
</script>

{#if src === ''}
	<img
		src="https://placehold.co/{width}x{height}/c29f9d/3e2518?text=No+image+found"
		alt="Placeholder"
		style="--img-width: {width}; --img-height: {height};"
	/>
{:else}
	<picture>
		<source srcset="{src}?fit=cover&width={width}&height={height}&format=avif" />
		<source srcset="{src}?fit=cover&width={width}&height={height}&format=webp" />
		<img
			src="{src}?fit=cover&width={width}&height={height}&format=png"
			{width}
			{height}
			{alt}
			style="--img-width: {width}; --img-height: {height}"
		/>
	</picture>
{/if}

<style>
	img {
		width: 100%;
		height: auto;
		aspect-ratio: var(--img-width) / var(--img-height);
	}
</style>
