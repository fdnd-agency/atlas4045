<script>
	import FilterCard from '$lib/atoms/FilterCard.svelte';
	import TextDropdownInput from '$lib/atoms/TextDropdownInput.svelte';
	import { page } from '$app/state';

	let { onchange } = $props();

	let streetsList = $derived(
		Array.from(
			// Remove duplicates
			new Set(
				// Get all streets from posters
				page.data.posters.map((poster) => poster.street.trim())
			)
		).sort() // Sort alphabetically
	);
</script>

<FilterCard>
	<TextDropdownInput
		id="straat"
		placeholder="Straat"
		labelClass={$css('label')}
		list={streetsList}
    {onchange}
	>
		Straatnaam
	</TextDropdownInput>
</FilterCard>

<style>
	.label {
		margin: auto;
	}
</style>
