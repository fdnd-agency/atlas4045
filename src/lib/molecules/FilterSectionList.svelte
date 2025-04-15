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
    margin: var(--spacing-lg) 0;
  }

  legend {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-sm);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    list-style: none;
  }
</style>
