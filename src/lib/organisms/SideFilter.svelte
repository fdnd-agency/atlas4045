<script>
	import ActiveFilters from '$lib/molecules/ActiveFilters.svelte';
	import FilterSearchbar from '$lib/molecules/FilterSearchbar.svelte';
	import FilterListSelect from "$lib/molecules/FilterListSelect.svelte";
	import FilterSectionSearch from "$lib/molecules/FilterSectionSearch.svelte";

  import { javascript } from '$lib/utils/javascriptEnabled.svelte.js';
	import Button from '$lib/atoms/Button.svelte';

	let { streets } = $props();

	let form;
</script>

<aside>
	<h3>Filters</h3>
	<h4>Vind posters door te zoeken op naam, of filter op straatnaam.</h4>
  <ActiveFilters />
	<form bind:this={formAside} action="/adressen" data-sveltekit-noscroll data-sveltekit-keepfocus>
		<div>
      <FilterSearchbar title="Zoeken" name="q" />
			<FilterListSelect
				title="Filter op straat"
				name="s"
				items={streets}
				onchange={() => form.requestSubmit()}
			/>
			<!-- <FilterSectionSearch title="Filter op naam" name="n" onchange={() => formAside.requestSubmit()} /> -->
			<!-- <FilterSectionList title="Thema" name="t" items={['Thema 1', 'Thema 2', 'Thema 3', 'Thema 4']} onchange={filterHandler} /> -->
			<!-- <FilterSectionList title="Stolpesteiner" name="p" items={['Stolpesteiner']} onchange={filterHandler} /> -->
		</div>
		<Button
			class={[ javascript.enabled && 'sr-only', 'highlight' ]}
			buttonClass={$css('submit-button')}
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

		/* SCROLLING */
		scroll-snap-type: x mandatory;		
		scroll-behavior: smooth;
		-webkit-overflow-scrolling: touch;

		/* SCROLLBAR */
		scrollbar-width: 0;

		&::-webkit-scrollbar {
			width: 0;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background: transparent;
			border: none;
		}
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

  .submit-button {
    background-color: var(--blue-200) !important;
    color: var(--black) !important;
  }

  .submit-button:hover {
    background-color: var(--blue-300) !important;
    color: var(--black) !important;
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

		form {
			margin-top: var(--spacing-lg);
			gap: var(--spacing-lg);
			height: 100%;
		}
	}
</style>