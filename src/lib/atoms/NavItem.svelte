<script>
	let { children, active = false, href = '' } = $props();
</script>

<li>
	{#if active}
		<h2>{@render children()}</h2>
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

  h2 {
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