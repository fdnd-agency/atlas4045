<script>
  import TextInput from '$lib/atoms/TextInput.svelte';
  import Button from '$lib/atoms/Button.svelte';
  import Checkbox from '$lib/atoms/Checkbox.svelte';
  import { page } from '$app/state';
  let { title, onchange, name } = $props();

  let enteredValue = $state("");
  let activeValues = $state([]);

  // Extract active names from the URL and add them to the activeNames array
  page.url.searchParams.forEach((value, key) => {
    (key == name) && (activeValues.push(value));
  });

  function addValueHandler() {
    if (enteredValue.length > 0) {
      activeValues.push(enteredValue);
      enteredValue = "";
    }
  }

  function removeValueHandler(event) {
    activeValues = activeValues.filter(value => value !== event.target.id);
    onchange();
  }
</script>

<fieldset>
  <legend>Zoeken op {title}</legend>
  <div>
    <TextInput bind:value={enteredValue} id={name} placeholder="Jacob..." sronly={true} name="">Zoeken op {title}</TextInput>
    <Button  class="highlight" onclick={addValueHandler} buttonClass={$css('add-value')}>+</Button>
  </div>
  <ul>
    {#each activeValues as activeValue}
      <li>
        <Checkbox id={activeValue} label={activeValue} {name} onchange={removeValueHandler} checked="true">
          {activeValue}
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

  div {
    display: flex;
    gap: var(--spacing-xs);
    max-width: 100%;
    margin-bottom: var(--spacing-sm);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    list-style: none;
  }

  .add-value {
    /* color: var(--blue-900) !important; */
    border: 2px solid var(--blue-100) !important;
  }
</style>
