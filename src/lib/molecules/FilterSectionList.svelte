<script>
  import Checkbox from '$lib/atoms/Checkbox.svelte';
  import { page } from '$app/state';
  let { title, items, onchange, name } = $props();

  let activeValues = $derived(page.url.searchParams.getAll(name));
</script>

<fieldset>
  <legend>{title}</legend>
  <ul>
    {#each items as item}
      <li>
        <Checkbox id={item} label={item} {name} {onchange} checked={activeValues.includes(item)}>
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
    font-family: var(--font-family-fraunces);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-regular);
    margin-bottom: var(--spacing-sm);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }
</style>
