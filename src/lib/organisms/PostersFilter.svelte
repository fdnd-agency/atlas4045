<script>
	import TextInput from '$lib/atoms/TextInput.svelte';
	import Search from '$lib/molecules/Search.svelte';
	import FilterBewoners from '$lib/molecules/FilterBewoners.svelte';
  import FilterStraat from '$lib/molecules/FilterStraat.svelte';
  import Button from '$lib/atoms/Button.svelte';
	import Loader from '$lib/atoms/Loader.svelte';

	let testpromise = null;
  let form;

	function filterHandler(event) {
    form.requestSubmit();
	}
</script>

<form bind:this={form} action="/" data-sveltekit-noscroll>
	<details>
		<summary class="no-focus">Filters</summary>
		<div class="filters">
			<FilterBewoners onchange={filterHandler} />
			<FilterStraat onchange={filterHandler} />
      <Button type="submit">Toepassen</Button>
			{#await testpromise}
				<Loader />
			{:catch error}
				<p>Something went wrong: {error.message}</p>
			{/await}
		</div>
	</details>

	<Search searchClass={$css('search')} />
</form>

<style>
	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		gap: var(--spacing-xs);
	}

	summary {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
		display: inline-block;
		width: fit-content;
		height: fit-content;
		padding: var(--spacing-xxs) var(--spacing-sm);
		border-radius: var(--border-radius-pill);
		border: 2px solid var(--brown-dark);
		text-align: center;
		text-decoration: none;
		font-weight: var(--font-weight-bold);
		color: var(--brown-dark);
		background-color: transparent;
		cursor: pointer;
		font-size: 1rem;

		transition-property: border, background-color, color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;

		&:hover,
		&:focus-visible {
			background-color: var(--brown-neutral);
			color: var(--white);
			border: 2px solid var(--brown-neutral);
		}
	}

	details {
		grid-column: 1 / 3;
		grid-row: 1 / 3;

		&[open] > summary {
			color: var(--white);
			background-color: var(--brown-dark);
			border: 2px solid var(--brown-dark);

			&:hover,
			&:focus-visible {
				background-color: var(--brown-neutral);
				color: var(--white);
				border: 2px solid var(--brown-neutral);
			}
		}
	}

	.search {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
	.filters {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;
	}
</style>
