<script>
	import TextInput from '$lib/atoms/TextInput.svelte';

	let {
		placeholder = 'Input',
		sronly = false,
		id,
		type = 'text',
		children,
		inputClass = '',
		labelClass = '',
		list = ['Option 1', 'Option 2', 'Option 3'],
    ...rest
	} = $props();
</script>

<TextInput type="text" {placeholder} {id} list={`${id}-list`} {inputClass} {labelClass} {...rest}>{@render children()}</TextInput>
<datalist id={`${id}-list`}>
	{#each list as option}
		<option>{option}</option>
	{/each}
</datalist>
