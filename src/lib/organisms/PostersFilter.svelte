<script>
	import FilterName from '$lib/molecules/FilterName.svelte';
	import FilterStreet from '$lib/molecules/FilterStreet.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import { javascript } from "$lib/utils/javascriptEnabled.svelte.js";

	let form;

  // Submit the form on change so that svelte handles the rest
	function filterHandler(event) {
		form.requestSubmit();
	}
</script>

<form bind:this={form} action="/adressen" data-sveltekit-noscroll>
	<FilterName onchange={filterHandler} />
	<FilterStreet onchange={filterHandler} />
	<Button 
    class={{ 'sr-only': javascript.enabled, 'highlight':true}}
    buttonClass={$css('show-on-focus')}  
    type="submit"
  >
    Filter
  </Button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.show-on-focus:focus-visible {
		position: static;
		display: inline-block;
		width: fit-content;
		height: fit-content;
		padding: var(--spacing-xxs) var(--spacing-sm);
		overflow: visible;
		clip: auto;
		white-space: normal;
		border-width: 0;
	}

	@media screen and (min-width: 800px) {
		form {
			flex-direction: row;
		}
	}
</style>
