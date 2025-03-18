<script>
	let { children, ...rest } = $props();
</script>

<div {...rest}>
  {@render children()}
</div>

<style>
  div {
    width: fit-content;
    padding-left: var(--spacing-sm);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    background-color: var(--blue-100);
    border-radius: var(--border-radius-pill);

    transition-property: background-color, color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;

    &:global(:has(input:not(:placeholder-shown))) {
      background-color: var(--blue-200);
    }
    &:focus-within {
      color: white;
      background-color: var(--blue-600) !important;
    }
  }
</style>
