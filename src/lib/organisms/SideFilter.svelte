<script>
	import FilterSection from '$lib/molecules/FilterSection.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import { javascript } from '$lib/utils/javascriptEnabled.svelte.js';
	import { page } from '$app/state';

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

  let form;

  function filterHandler(event) {
    console.log(event);
    form.requestSubmit();
  }
</script>

<aside>
  <h3>Filters</h3>
	<form bind:this={form} action="/adressen" data-sveltekit-noscroll>
		<Button
			class={{ 'sr-only': javascript.enabled, highlight: true }}
			buttonClass={$css('show-on-focus')}
			type="submit"
		>
			Toepassen
		</Button>
		<div>
			<FilterSection title="Straat" items={streetsList} onchange={filterHandler} />
			<FilterSection title="Naam" items={['Naam 1', 'Naam 2', 'Naam 3', 'Naam 4']} onchange={filterHandler} />
      <FilterSection title="Thema" items={['Thema 1', 'Thema 2', 'Thema 3', 'Thema 4']} onchange={filterHandler} />
      <FilterSection title="Stolpesteiner" items={['Stolpesteiner']} onchange={filterHandler} />
		</div>
	</form>
</aside>

<style>
  /* h3 {
    margin-top: var(--spacing-md);
    position: sticky;
    top: 8rem;
  } */
	aside {
    position: sticky;
    top: 6rem;
		background-color: var(--white);
		box-shadow: -20px 0px 10px 20px rgba(0, 0, 0, 0.303);
		padding: var(--spacing-md);
    height: fit-content;
    max-height: calc(100vh - 6rem);
    overflow-y: auto;
	}

	form {
    /* position: sticky;
    top: 8rem; */
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
</style>
