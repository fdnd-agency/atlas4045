<script>
	import FilterSection from '$lib/molecules/FilterSection.svelte';
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
<aside class={{ hidden: !javascript.enabled, open: filterOpen }}>
	<h3>Filters</h3>
	<form bind:this={formAside} action="/adressen" data-sveltekit-noscroll>
		<Button
			class={{ 'sr-only': javascript.enabled, highlight: true }}
			buttonClass={$css('show-on-focus')}
			type="submit"
		>
			Toepassen
		</Button>
		<div>
			<FilterSection
				title="Straat"
				name="s"
				items={streets}
				onchange={() => formAside.requestSubmit()}
			/>
			<FilterSection
				title="Naam"
				name="n"
				items={['Jacob', 'Vries', 'Kreveld']}
				onchange={() => formAside.requestSubmit()}
			/>
			<!-- <FilterSection title="Thema" name="t" items={['Thema 1', 'Thema 2', 'Thema 3', 'Thema 4']} onchange={filterHandler} /> -->
			<!-- <FilterSection title="Stolpesteiner" name="p" items={['Stolpesteiner']} onchange={filterHandler} /> -->
		</div>
	</form>
</aside>

<Button
	onclick={() => (filterOpen = !filterOpen)}
	class="highlight"
	buttonClass={$css('filter-button')}>Filters</Button
>

<!-- IF JS DISABLED SHOW DETAILS VERSION -->
<details class={{ hidden: javascript.enabled }}>
	<summary>
		<h3>Filters</h3>
	</summary>
	<form bind:this={formDetails} action="/adressen" data-sveltekit-noscroll>
		<Button
			class={{ 'sr-only': javascript.enabled, highlight: true }}
			buttonClass={$css('show-on-focus')}
			type="submit"
		>
			Toepassen
		</Button>
		<div>
			<FilterSection
				title="Straat"
				name="s"
				items={streets}
				onchange={() => formDetails.requestSubmit()}
			/>
			<FilterSection
				title="Naam"
				name="n"
				items={['Jacob', 'Vries', 'Kreveld']}
				onchange={() => formDetails.requestSubmit()}
			/>
			<!-- <FilterSection title="Thema" name="t" items={['Thema 1', 'Thema 2', 'Thema 3', 'Thema 4']} onchange={filterHandler} /> -->
			<!-- <FilterSection title="Stolpesteiner" name="p" items={['Stolpesteiner']} onchange={filterHandler} /> -->
		</div>
	</form>
</details>

<style>
	aside {
		display: block;
		position: fixed;
		top: 6rem;
		left: 0;
		background-color: var(--white);
		padding: var(--spacing-md);
		height: calc(100vh - 6rem);
		width: 100vw;
		overflow-y: auto;
		z-index: 100;
		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out;
	}

	.filter-button {
		position: fixed;
		top: calc(6rem + var(--spacing-md));
		left: var(--page-padding);
		z-index: 100;
		transition: all 0.3s ease-in-out !important;
	}

	aside.open + .filter-button {
		/* Move button to right of screen */
		transform: translateX(calc(100vw - 100% - var(--page-padding) * 2));
	}

	aside.open {
		transform: translateX(0);
	}

	form {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		gap: var(--spacing-md);
	}

	form > div {
		grid-column: 0 / 2;
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

	@media screen and (min-width: 460px) {
		aside {
			position: sticky;
			box-shadow: -20px 0px 10px 20px rgba(0, 0, 0, 0.303);
			height: calc(100vh - 6rem);
			width: 20rem;
			transform: translateX(0);
			z-index: 0;
		}

		.filter-button {
			display: none !important;
		}
	}
</style>
