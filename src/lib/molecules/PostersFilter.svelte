<script>
	import TextInput from '$lib/atoms/TextInput.svelte';
	import Search from '$lib/molecules/Search.svelte';
</script>

<form>
	<details>
		<summary>Filters</summary>
		<div>
			<TextInput
				id="birth-date"
				type="number"
				placeholder="Geboortedatum"
				sronly="true"
				style="max-width: 6rem;"
				min="1900"
				max="2021"
				step="1"
        inputClass={$css("year-input")}
			>
				Geboortedatum
			</TextInput>
			<TextInput
				id="inhabitants"
				type="number"
				placeholder="Bewoners"
				sronly="true"
				style="max-width: 6rem;"
				min="0"
				max="6"
				step="1"
			>
				Bewoners
			</TextInput>
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
	}

	.search {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}

  .year-input {
    max-width: 6rem;
  }
</style>
