<script>
	let { children, active = false, href = '' } = $props();
</script>

<li>
	{#if active}
		<span aria-current="page">{@render children()}</span>
	{:else if href}
		<a {href} class="focus-ring">{@render children()}</a>
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
    color: var(--orange-neutral);
  }

  a {
    text-decoration: none;
    color: var(--brown-dark);

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      border-radius: var(--border-radius-pill);
    }
  }
</style>