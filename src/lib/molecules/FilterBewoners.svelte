<script>
	import Checkbox from '$lib/atoms/Checkbox.svelte';
</script>

<div>
  <span>Aantal bewoners</span>
  <div class="checkboxes">
  <Checkbox id="1-bewoner" sronly="true" symbol="1" >1 Bewoner</Checkbox>
  <Checkbox id="2-bewoner" sronly="true" symbol="2" >2 Bewoners</Checkbox>
  <Checkbox id="3-bewoner" sronly="true" symbol="3" >3 Bewoners</Checkbox>
  <Checkbox id="4-bewoner" sronly="true" symbol="4" >4 Bewoners</Checkbox>
  </div>
</div>

<style>
	div {
    width: fit-content;
    padding: var(--spacing-xs);
		display: flex;
    flex-direction: column;
		gap: var(--spacing-xs);

    background-color: var(--brown-lightest);
    border-radius: var(--spacing-sm);

    &.checkboxes {
      padding: 0;
      flex-direction: row;
    }
	}
</style>
