<script>
  import TextInput from '$lib/atoms/TextInput.svelte';
  import Button from '$lib/atoms/Button.svelte';
  import Checkbox from '$lib/atoms/Checkbox.svelte';
  import { onMount } from 'svelte';

  let { title, onevent, name, formRef} = $props();

  let searchTimeout;
  let inputRef;
  
  function debounceSearch(event) {
    // Clear any existing timeout
    clearTimeout(searchTimeout);
    
    // Set a new timeout to submit the form after 300ms of no typing
    searchTimeout = setTimeout(() => {
        inputRef.form.requestSubmit();
    }, 600);
  }
</script>

<fieldset>
  <legend>Zoeken</legend>
  <TextInput 
    id="search" 
    placeholder="Zoek op naam, adres, huisnummer..." 
    sronly={true} 
    name="q" 
    inputClass={$css('input')}
    bind:inputRef
    onkeyup={debounceSearch}
  >Zoeken</TextInput>
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
