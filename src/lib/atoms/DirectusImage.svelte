<!-- This component should be used when rendering an image from the Directus backend to automatically optimise it -->

<script>
	let { imageId = '', alt = 'Placeholder', width, height, loading = 'eager' } = $props();

	const URL = 'https://fdnd-agency.directus.app/assets/';
	const placeholderBgColor = '526DAE';
	const placeholderTextColor = 'ffffff';
</script>

{#if imageId === ''}
	<!-- Use placehold.co API to generate a custom placeholder image -->
	<img
		src="https://placehold.co/{width}x{height}/{placeholderBgColor}/{placeholderTextColor}?text=Geen+foto+beschikbaar"
		{width}
		{height}
		{alt}
		{loading}
		style="--img-width: {width}; --img-height: {height};"
	/>
{:else}
	<!-- Use <picture> to optimise image format using Progressive Enhancement -->
	<picture>
		<source
			type="image/avif"
			srcset="{URL}{imageId}?fit=cover&width={width}&height={height}&format=avif"
		/>
		<source
			type="image/webp"
			srcset="{URL}{imageId}?fit=cover&width={width}&height={height}&format=webp"
		/>
		<img
			src="{URL}{imageId}?fit=cover&width={width}&height={height}&format=png"
			{width}
			{height}
			{alt}
			{loading}
			style="--img-width: {width}; --img-height: {height}"
		/>
	</picture>
{/if}

<style>
	img {
		width: 100%;
		height: auto;
		aspect-ratio: var(--img-width) / var(--img-height);
		border-radius: var(--border-radius-md);
	}
</style>
