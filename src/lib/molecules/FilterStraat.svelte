<script>
	import TextDropdownInput from '$lib/atoms/TextDropdownInput.svelte';
	import FilterCard from "$lib/atoms/FilterCard.svelte";
  import { page } from '$app/state';
  
  let street = $state('');

  if (page.url.searchParams.get('straat')) {
    $effect(() => {
      street = page.url.searchParams.get('straat');
    });
  }

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
		placeholder="Oosterpark..."
		list={streetsList}
		{onchange}
		value={street}
	>
		Straat
	</TextDropdownInput>
</FilterCard>
