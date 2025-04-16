<script>
	let {
		children,
    onchange,
    id,
    name,
    checked = true,
    ...rest
	} = $props();
</script>

<li>
  <input {id} {name} {onchange} type="checkbox" class="no-focus sr-only" value={id} {...rest} bind:checked={checked} />
  <label for={id}>{@render children()}</label>
</li>

<style>
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-xs) var(--spacing-sm);
		border-radius: var(--border-radius-pill);
		background-color: var(--blue-700);
		width: fit-content;
	}
</style>
