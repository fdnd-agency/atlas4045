<script>
  import Checkbox from '$lib/atoms/Checkbox.svelte';
  import FilterSection from '$lib/atoms/FilterSection.svelte';
  import { page } from '$app/state';
  let { title, items, onchange, name } = $props();

  let activeValues = $derived(page.url.searchParams.getAll(name));
</script>

<FilterSection {title}>
  <ul>
    {#each items as item}
      <li>
        <Checkbox id={item} label={item} {name} {onchange} checked={activeValues.includes(item)}>
          {item}
        </Checkbox>
      </li>
    {/each}
  </ul>
</FilterSection>

<style>
  ul {
    display: flex;
    flex-direction: row;
    width: calc(100vw - var(--spacing-md)*2);
    gap: var(--spacing-xs);
    list-style: none;

    /* SCROLLING */
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;		
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    /* SCROLLBAR */
    scrollbar-width: 0;

    &::-webkit-scrollbar {
      width: 0;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent;
      border: none;
    }
  }

  li {
    display: flex;
    align-items: center;

    gap: var(--spacing-xs); 
    background-color: var(--blue-600);
    padding: var(--spacing-xs) var(--spacing-sm);
    white-space: nowrap;
    border-radius: var(--border-radius-sm);
  }

  @media screen and (min-width: 800px) {
    ul {
      flex-direction: column;
      gap: var(--spacing-sm);
      list-style: none;
      width: fit-content;
    }

    li {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      background-color: transparent;
      padding: 0;
    }
  }
</style>