<script>
	import TextInput from '$lib/atoms/TextInput.svelte';
	import FilterCard from '$lib/atoms/FilterCard.svelte';
	import { page } from '$app/state';

	let name = $state('');

	if (page.url.searchParams.get('naam')) {
		$effect(() => {
			name = page.url.searchParams.get('naam');
		});
	}

	let { onchange } = $props();
</script>

<FilterCard>
	<TextInput id="naam" placeholder="Jacob..." {onchange} value={name}>Naam</TextInput>
</FilterCard>
