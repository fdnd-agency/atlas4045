<script>
  import { Button  } from '$lib/index';

  import { javascript } from "$lib/utils/javascriptEnabled.svelte.js";
  import { onMount } from 'svelte';

	let { children } = $props()

  let isOpen = $state(false);

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav class={{"js-enabled": javascript.enabled}}>
  <Button buttonClass={$css("menu-button")} onclick={toggleMenu} class={{"hidden": !javascript.enabled, "highlight": true}}>
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
    padding: 0 0 var(--spacing-sm) 0;
    gap: var(--spacing-sm);
    text-align: center;
    border-bottom: 1px solid var(--neutral-400);
    font-weight: var(--font-weight-bold);
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
      border: none;
      gap: var(--spacing-lg);
    }

    nav.js-enabled .menu-button {
      display: none;
    }
  }
</style>
