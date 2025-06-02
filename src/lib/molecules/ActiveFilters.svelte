<script>
	import FilterChip from '$lib/atoms/FilterChip.svelte';
  import { javascript } from '$lib/utils/javascriptEnabled.svelte.js';
	import { page } from '$app/state';

	let activeFilters = $derived(page.url.searchParams);
	let form;
</script>

<form class={[!javascript.enabled && "hidden"]} bind:this={form} action="/adressen" data-sveltekit-noscroll>
	{#key activeFilters}
		{#each activeFilters as [key, value]}
			<FilterChip id={value} name={key} onchange={() => form.requestSubmit()}>
				{value}
			</FilterChip>
		{/each}
	{/key}
</form>

<style>
  form {
    padding-top: var(--spacing-md);
    display: flex;
    gap: var(--spacing-xxs);
    flex-wrap: wrap;
  }
</style>