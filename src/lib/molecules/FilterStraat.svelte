<script>
	import FilterCard from '$lib/atoms/FilterCard.svelte';
	import TextDropdownInput from '$lib/atoms/TextDropdownInput.svelte';
	import Checkbox from '$lib/atoms/Checkbox.svelte';

  let { onchange } = $props();
</script>

<FilterCard>
	<TextDropdownInput id="straat" placeholder="Straat" labelClass={$css('label')}>Straatnaam</TextDropdownInput>
</FilterCard>

<style>
  .label {
    margin: auto;
  }
</style>