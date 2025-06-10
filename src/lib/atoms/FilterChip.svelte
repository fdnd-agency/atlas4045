<script>
	let {
		children,
    onchange,
    id,
    name,
    checked = true,
	} = $props();
</script>

<li>
  <input {id} {name} {onchange} type="checkbox" class="sr-only" value={id} bind:checked={checked} />
  <label for={id}>{@render children()}</label>
</li>

<style>
	li {
		display: flex;
    cursor: pointer;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-xs) var(--spacing-sm);
		border-radius: var(--border-radius-pill);
		background-color: var(--blue-700);
		width: fit-content;
    list-style: none;
    font-size: var(--font-size-sm);
    border-radius: var(--border-radius-md);
	}

  li:focus-within {
    background-color: var(--blue-800);
  }

  label {
    cursor: pointer;
  }

  li:has(input[type="checkbox"]:not(:checked)) {
    display: none;
  }
</style>