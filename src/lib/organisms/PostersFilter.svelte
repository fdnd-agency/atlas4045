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
			<Button class={(javascriptEnabled ? "sr-only" : '')} type="submit">Toepassen</Button>
</form>

<style>
	form {
		display: flex;
		gap: var(--spacing-xs);
	}
</style>
