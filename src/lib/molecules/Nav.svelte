<script>
	let { children } = $props();
</script>

<nav>
	<ul>
		{@render children()}
	</ul>
</nav>

<style>
	nav {
		padding: 1rem 3rem;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
    gap: 20%;
    justify-content: center;
	}
</style>
