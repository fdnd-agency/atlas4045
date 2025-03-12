<script>
	import Button from "$lib/atoms/Button.svelte";
  import { onMount } from 'svelte';

	let { children } = $props()

  let jsEnabled = $state(false);

  onMount(() => {
    jsEnabled = true;
  });
</script>

<nav class={{"js-enabled": jsEnabled}}>
  <Button buttonClass={$css("menu-button")} onclick={() => {}}>
    Menu
  </Button>
  <ul>
		{@render children()}
	</ul>
</nav>


<style>
  nav, ul {
    padding-left: var(--spacing-lg);
    width: 100%;
  }

  nav {
    width: fit-content;
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

  nav.js-enabled ul {
    display: none;
  }

  nav.js-enabled .menu-button {
    display: inline-block;
  }

  @media (min-width: 700px) {
    nav {
      position: static;
    }

    ul {
      flex-direction: row;
      gap: var(--spacing-lg);
    }

    nav.js-enabled {
      justify-self: flex-start;
    }

    nav.js-enabled ul {
      display: flex;
    }

    nav.js-enabled .menu-button {
      display: none;
    }
  }
</style>
