<script>
	import FilterNaam from '$lib/molecules/FilterNaam.svelte';
	import FilterStraat from '$lib/molecules/FilterStraat.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import { onMount } from 'svelte';

	let form;
	let javascriptEnabled;

	function filterHandler(event) {
		form.requestSubmit();
	}

	onMount(() => {
		javascriptEnabled = true;
	});
</script>

<form bind:this={form} action="/posters" data-sveltekit-noscroll>
	<FilterNaam onchange={filterHandler} />
	<FilterStraat onchange={filterHandler} />
	<Button class={{'sr-only': javascriptEnabled}} buttonClass={$css("show-on-focus")} type="submit">Toepassen</Button>
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
      gap: var(--spacing-md);
    }
  }
</style>
