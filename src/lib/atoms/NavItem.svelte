<script>
	let { children, active = false, href = '' } = $props();
</script>

<li>
	{#if active}
		<span aria-current="page">{@render children()}</span>
	{:else if href}
		<a {href}>{@render children()}</a>
	{:else}
		<span>{@render children()}</span>
	{/if}
</li>

<style>
  li {
    list-style-type: none;
    display: inline-block;
  }

  span[aria-current="page"] {
    font-size: 1rem;
    color: var(--color-brown);
  }

  a {
    text-decoration: none;
    color: var(--color-brown-dark);
    transition: outline 0.15s ease-in-out;
    outline: 0px solid var(--color-brown);
    outline-offset: var(--spacing-xxs);

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: 3px solid var(--color-brown);
    }
  }
</style>