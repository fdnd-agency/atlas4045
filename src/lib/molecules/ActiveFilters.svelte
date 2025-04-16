<script>
	import FilterChip from '$lib/atoms/FilterChip.svelte';
	import { page } from '$app/state';

	let activeFilters = $derived(page.url.searchParams);
	let form;
</script>

<form bind:this={form} action="/adressen" data-sveltekit-noscroll>
	{#key activeFilters}
		{#each activeFilters as [key, value]}
			<FilterChip id={value} name={key} onchange={() => form.requestSubmit()}>
				{value}
			</FilterChip>
		{/each}
	{/key}
</form>
