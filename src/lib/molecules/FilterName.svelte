<script>
	import TextInput from '$lib/atoms/TextInput.svelte';
	import FilterCard from '$lib/atoms/FilterCard.svelte';
	import { page } from '$app/state';

	let name = $state('');

  // Repopulate the name filter from the URL on refresh
	if (page.url.searchParams.get('naam')) {
		$effect(() => {
			name = page.url.searchParams.get('naam');
		});
	}

  // Take onchange as a prop to bubble it up from the TextInput
	let { onchange } = $props();
</script>

<FilterCard>
	<TextInput id="naam" placeholder="Jacob..." {onchange} value={name}>Naam</TextInput>
</FilterCard>
