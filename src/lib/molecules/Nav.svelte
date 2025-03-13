<script>
	import Button from "$lib/atoms/Button.svelte";
  import { onMount } from 'svelte';

	let { children } = $props()

  let jsEnabled = $state(false);
  let isOpen = $state(false);

  onMount(() => {
    jsEnabled = true;
  });

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav class={{"js-enabled": jsEnabled}}>
  <Button buttonClass={$css("menu-button")} onclick={toggleMenu}>
    Menu
  </Button>
  <ul class={{"is-open": isOpen}}>
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
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--white);
    padding: var(--spacing-xs);
    z-index: 100;
  }

  nav.js-enabled ul {
    width: 100%;
    text-align: center;
    padding: var(--spacing-xxs) 0;
    border-bottom: 1px solid var(--neutral-400);
    font-weight: var(--font-weight-bold);
    color: var(--neutral-900);
    background-color: var(--white);
    border: 2px solid var(--neutral-400);
  }

  nav.js-enabled ul.is-open {
    display: flex;
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
      position: static;
      width: fit-content;
      background-color: transparent;
      padding: 0;
    }

    nav.js-enabled .menu-button {
      display: none;
    }
  }
</style>
