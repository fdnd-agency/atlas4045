
<script>
  import TextInput from '$lib/atoms/TextInput.svelte';
  import Button from '$lib/atoms/Button.svelte';
  import Checkbox from '$lib/atoms/Checkbox.svelte';

  let { title, onchange, name } = $props();
</script>

<fieldset>
  <legend>Zoeken</legend>
  <TextInput id="search" placeholder="Zoek op naam, adres, huisnummer..." sronly={true} name="search" inputClass={$css('input')}>Zoeken</TextInput>
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

  .input {
    width: 100%;
  }
</style>
