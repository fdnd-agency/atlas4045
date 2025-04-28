<script>
  import Checkbox from '$lib/atoms/Checkbox.svelte';
  import { page } from '$app/state';
  let { title, items, onchange, name } = $props();

  let activeValues = $state([]);

  // Extract active values from the URL and add them to the activeValues array
  page.url.searchParams.forEach((value, key) => {
    (key == name) && (activeValues.push(value));
  });

  function removeValueHandler(event) {
    activeValues = activeValues.filter(value => value !== event.target.id);
    onchange();
  }
</script>

<fieldset>
  <legend>{title}</legend>
  <ul>
    {#each items as item}
      <li>
        <Checkbox id={item} label={item} {name} onchange={removeValueHandler} checked={activeValues.includes(item)}>
          {item}
        </Checkbox>
      </li>
    {/each}
  </ul>
</fieldset>

<style>
  fieldset {
    border: none;
    padding: 0;
    /* margin: var(--spacing-md) 0 0 0; */
    display: flex;
  }

  legend {
    font-family: var(--font-family-fraunces);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-regular);
    margin-bottom: var(--spacing-sm);
  }

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
