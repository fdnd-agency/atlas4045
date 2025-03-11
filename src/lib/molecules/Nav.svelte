<script>
	let { children } = $props()
</script>

<nav>
	<ul>
		{@render children()}
	</ul>
</nav>

<style>
  nav, ul {
    padding-left: var(--spacing-lg);
    height: 100%;
    width: 100%;
  }
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
    gap: var(--spacing-lg);
    align-items: center;
	}
</style>
