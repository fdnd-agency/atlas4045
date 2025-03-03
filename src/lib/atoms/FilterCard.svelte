<script>
	let { children, ...rest } = $props();
</script>

<div {...rest}>
  {@render children()}
</div>

<style>
	div {
    width: fit-content;
    padding: var(--spacing-xs);
		display: flex;
    flex-direction: column;
		gap: var(--spacing-xs);

    background-color: var(--brown-dark); 
    color: var(--white);
    /* border: 2px solid var(--brown-dark); */
    border-radius: var(--spacing-sm);
	}
</style>
