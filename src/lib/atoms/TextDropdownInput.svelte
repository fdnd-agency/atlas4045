<script>
  let { 
    placeholder = "Input", 
    sronly = false, 
    id, 
    type = "text", 
    children, 
    inputClass = "", 
    labelClass = "",
    list = ["Option 1", "Option 2", "Option 3"],
  } = $props();
</script>

<TextInput type="text" placeholder="Straat" id="straat" list={`${id}-list`}>Straatnaam</TextInput>
<datalist id={`${id}-list`}>
  {#each list as option}
    <option>{option}</option>
  {/each}
</datalist>