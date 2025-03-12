<script>
  import { onMount } from 'svelte';

	let { children } = $props()

  let jsEnabled = false;

  onMount(() => {
    jsEnabled = true;
  });
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

  nav {
    width: fit-content;
    position: absolute;
    top: var(--spacing-xs);
    right: var(--page-padding);
  }
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    align-items: center;
	}

  @media (min-width: 700px) {
    nav {
      position: static;
    }

    ul {
      flex-direction: row;
      gap: var(--spacing-lg);
    }
  }
</style>
