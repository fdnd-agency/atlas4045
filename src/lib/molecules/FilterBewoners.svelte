<script>
	import FilterCard from '$lib/atoms/FilterCard.svelte';
	import Checkbox from '$lib/atoms/Checkbox.svelte';

  let { onchange } = $props();
</script>

<FilterCard style="padding-right: 1rem;">
	<span>Aantal bewoners</span>
	<div>
		<Checkbox id="1-bewoner" sronly="true" symbol="1" {onchange}>1 Bewoner</Checkbox>
		<Checkbox id="2-bewoners" sronly="true" symbol="2" {onchange}>2 Bewoners</Checkbox>
		<Checkbox id="3-bewoners" sronly="true" symbol="3" {onchange}>3 Bewoners</Checkbox>
		<Checkbox id="4-bewoners" sronly="true" symbol="4" {onchange}>4 Bewoners</Checkbox>
		<Checkbox id="5-bewoners" sronly="true" symbol="5+" {onchange}>5 of meer Bewoners</Checkbox>
	</div>
</FilterCard>

<style>
	div {
    display: flex;
		padding: 0;
		flex-direction: row;
    gap: var(--spacing-xxs);
	}
</style>
