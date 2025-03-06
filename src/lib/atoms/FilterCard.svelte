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
    gap: var(--spacing-xs);
    background-color: var(--brown-100);
    border-radius: var(--border-radius-pill);

    transition-property: border, background-color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;

    &:focus-within {
      background-color: var(--brown-300);
    }

    &:has( input:not(:placeholder-shown)) {
      background-color: var(--brown-300);
    }
  }
</style>
