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
<aside class={[filterOpen && 'open', !javascript.enabled]}> <!--  && $css('hide-mobile') -->
	<h3>Filters</h3>
	<h4>Vind adressen via een zoekterm, of filter op straatnaam.</h4>
	<form bind:this={formAside} action="/adressen" data-sveltekit-noscroll>
		<div>
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
			Toepassen
		</Button>
	</form>
</aside>
<!-- <div class="filter-button-container">
	<Button
		onclick={() => (filterOpen = !filterOpen)}
		class="highlight"
		buttonClass={[$css('filter-button'), !javascript.enabled && $css('hide-mobile')]}>Filters </Button
	>
</div> -->

<!--
IF JS DISABLED SHOW DETAILS VERSION 
<details class={{ hidden: javascript.enabled, 'hide-desktop': !javascript.enabled }}>
	<summary>
		<h3>Filters</h3>
	</summary>
	<form bind:this={formDetails} action="/adressen" data-sveltekit-noscroll>
		<div>
			<FilterSectionList
				title="Straat"
				name="s"
				items={streets}
				onchange={() => formDetails.requestSubmit()}
			/>
		</div>
		<Button
			class={{ 'sr-only': javascript.enabled, highlight: true }}
			buttonClass={$css('show-on-focus')}
			type="submit"
		>
			Toepassen
		</Button>
	</form>
</details> -->

<style>
	aside {
		display: block;
		position: sticky;
		top: 6rem;
		left: 0;
		background-color: var(--blue-500);
		color: var(--white);
		padding: var(--spacing-md) var(--spacing-md);

		/* width: 100vw; */
		/* overflow-y: auto; */
		/* z-index: 100; */
		/* transform: translateX(-100%); */
		transition: transform 0.3s ease-in-out;
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

	/* .filter-button {
		position: sticky;
		top: calc(6rem + var(--spacing-md));
		left: var(--page-padding);
		z-index: 100;
		transition: all 0.3s ease-in-out !important;
	}

	aside.open + .filter-button {
		transform: translateX(calc(100vw - 100% - var(--page-padding) * 2));
	}

	aside.open {
		transform: translateX(0);
	} */

	/* .filter-button-container {
		background-color: var(--blue-500);
		width: 100%;
		height: fit-content;
	} */

	form {
		display: grid !important;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		gap: var(--spacing-md);
	}

	form > div {
		grid-column: 1 / 3;
		grid-row: 2;
	}

	.show-on-focus:focus-visible {
		position: static;
		display: inline-block;
		width: fit-content;
		height: fit-content;
		padding: var(--spacing-xxs) var(--spacing-sm);
		overflow: visible;
		clip: auto;
		white-space: normal;
		border-width: 0;
	}

	.hide-mobile {
		display: none !important;
	}

	.hide-desktop {
		display: block !important;
	}

	@media screen and (min-width: 800px) {
		aside {
			position: sticky;
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
	}
</style>
