<script>
	import FilterSearchbar from '$lib/molecules/FilterSearchbar.svelte';
	import ActiveFilters from '$lib/molecules/ActiveFilters.svelte';
	import FilterSectionList from '$lib/molecules/FilterSectionList.svelte';
  import FilterSectionSearch from '$lib/molecules/FilterSectionSearch.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import { javascript } from '$lib/utils/javascriptEnabled.svelte.js';
	import { page } from '$app/state';

	let { streets } = $props();

	let filterOpen = $state(false);

	// Derive the list of streets from the posters
	let streetsList = $derived(
		Array.from(
			// Remove duplicates
			new Set(
				// Get all streets from posters
				page.data.addresses.map((address) => address.street.trim())
			)
		).sort() // Sort alphabetically
	);

	let formAside;
	let formDetails;
</script>

<!-- IF JS ENABLED SHOW ASIDE VERSION -->
<aside class={[filterOpen && 'open', !javascript.enabled]}>
	<h3>Filters</h3>
	<h4>Vind posters door te zoeken op naam, of filter op straatnaam.</h4>
	<form bind:this={formAside} action="/adressen" data-sveltekit-noscroll data-sveltekit-keepfocus>
		<div>
			<FilterSearchbar formRef={formAside} />
			<FilterSectionList
				title="Straat"
				name="s"
				items={streets}
				onchange={() => formAside.requestSubmit()}
			/>
		</div>
		<Button
			class={{ 'sr-only': javascript.enabled, highlight: true }}
			buttonClass={$css('show-on-focus')}
			type="submit"
		>
			Filter toepassen
		</Button>
	</form>
</aside>

<style>
	aside {
		display: block;
		position: sticky;
		top: -8rem;
		left: 0;
		background-color: var(--blue-500);
		color: var(--white);
		padding: var(--spacing-md) var(--spacing-md);
		padding-bottom: var(--spacing-sm);
		transition: transform 0.3s ease-in-out;
    overflow-y: scroll;
    overflow-x: hidden;
	}

	aside h3 {
		color: var(--white);
		font-size: var(--font-size-xxl);
		font-weight: var(--font-weight-regular);
		margin-bottom: var(--spacing-sm);
	}

	aside h4 {
		color: var(--white);
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-light);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
		margin-top: var(--spacing-md);
	}

	.show-on-focus:focus-visible {
		background-color: var(--blue-700) !important;
	}

	.show-on-focus {
		background-color: var(--blue-600) !important;
		border-radius: var(--border-radius-sm) !important;
		box-shadow: none !important;
		width: 100% !important;
		margin-bottom: var(--spacing-xs);
	}

	.higlight {
		background-color: var(--blue-200);
	}

  .hide-mobile {
		display: none !important;
	}

	.hide-desktop {
		display: block !important;
	}

	@media screen and (min-width: 800px) {
		aside {
			display: flex;
			flex-direction: column;
			top: 6rem;
			height: calc(100vh - 6rem);
			width: 20rem;
			transform: translateX(0);
			z-index: 0;
			padding: var(--spacing-lg) var(--spacing-md);
		}

		.hide-mobile {
			display: block !important;
		}

		.hide-desktop {
			display: none !important;
		}

		.filter-button {
			display: none !important;
		}

		form {
			margin-top: var(--spacing-lg);
			gap: var(--spacing-lg);
			height: 100%;
		}
	}
</style>
