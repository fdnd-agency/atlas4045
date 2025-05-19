<script>
	import TextInput from '$lib/atoms/TextInput.svelte';
	import FilterSection from '$lib/atoms/FilterSection.svelte';
	import { page } from '$app/state';

	let { title, name } = $props();

	let activeSearch = $derived(page.url.searchParams.get(name));
	let searchTimeout;
	let inputRef;

	function debounceSearch(event) {
		// Clear any existing timeout
		clearTimeout(searchTimeout);

		// Set a new timeout to submit the form after 300ms of no typing
		searchTimeout = setTimeout(() => {
			inputRef.form.requestSubmit();
		}, 800);
	}
</script>

<FilterSection {title}>
	<TextInput
		id="search"
		placeholder="Jacob..."
		value={activeSearch}
		sronly={true}
		{name}
		inputClass={$css('input')}
		bind:inputRef
		onkeyup={debounceSearch}>Zoeken</TextInput
	>
</FilterSection>

<style>
	.input {
		width: 100%;
	}
</style>
