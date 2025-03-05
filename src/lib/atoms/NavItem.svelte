<script>
	let { children, active = false, href = '' } = $props()
</script>

<li>
	{#if active}
		<h1>{@render children()}</h1>
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

  h1 {
    font-size: 1rem;
    color: var(--orange-neutral);
    font-family: var(--font-family-nunito);
    font-weight: var(--font-weight-light);
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