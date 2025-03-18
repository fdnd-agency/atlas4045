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
    color: var(--red-600);
    font-family: var(--font-family-nunito);
    font-weight: var(--font-weight-regular);
    cursor: default;
    text-decoration: underline;
  }

  a, span {
    display: inline-block;
    text-decoration: none;
    color: var(--neutral-900);
    font-weight: var(--font-weight-regular);
    border-radius: var(--border-radius-pill);

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }

  /* This is a hack to make the text stay in the same place when the link is active */
  a {
    transform: translateY(0.5px);
  }
</style>