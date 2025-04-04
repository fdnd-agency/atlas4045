<script>
  import Checkbox from '$lib/atoms/Checkbox.svelte';

  let { title, items, onchange } = $props();
</script>

<fieldset>
  <legend>{title}</legend>
  <ul>
    {#each items as item}
      <li>
        <Checkbox id={item} label={item} {onchange}>
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
    margin: var(--spacing-md) 0;
  }

  legend {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--spacing-xs);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    list-style: none;
  }
</style>
