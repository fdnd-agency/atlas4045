<script>
	import TextInput from '$lib/atoms/TextInput.svelte';
	import FilterCard from '$lib/atoms/FilterCard.svelte';
	let { onchange } = $props();
</script>

<FilterCard>
	<TextInput id="naam" placeholder="Vries..." {onchange}>
		Naam
	</TextInput>
</FilterCard>
