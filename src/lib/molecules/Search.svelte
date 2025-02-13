<script>
	import Button from '$lib/atoms/Button.svelte';
	import TextInput from '$lib/atoms/TextInput.svelte';

  let { searchClass = ""} = $props();
</script>

<div class={searchClass}>
  <TextInput type="text" placeholder="Zoeken..." sronly="true" id="search">Zoeken</TextInput>
	<Button type="submit">Zoeken</Button>
</div>

<style>
	div {
		display: flex;
    align-items: center;
    justify-content: center;
		gap: var(--spacing-xs);
	}
</style>
