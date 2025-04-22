
<script>
  import TextInput from '$lib/atoms/TextInput.svelte';
  import Button from '$lib/atoms/Button.svelte';
  import Checkbox from '$lib/atoms/Checkbox.svelte';

  let { title, onchange, name } = $props();
</script>

<fieldset>
  <legend>Zoeken</legend>
  <TextInput id="search" placeholder="Zoek op naam, adres, huisnummer..." sronly={true} name="" inputClass={$css('input')}>Zoeken</TextInput>
</fieldset>


<style>
  fieldset {
    border: none;
    padding: 0;
    margin: var(--spacing-xs) 0 var(--spacing-md) 0;
  }

  legend {
    font-family: var(--font-family-fraunces);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-regular);
    margin-bottom: var(--spacing-sm);
  }

  .input {
    width: 100%;
  }
</style>
