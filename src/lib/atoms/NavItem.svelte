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
  }

  a:hover {
    text-decoration: underline;
  }
</style>