<script>
	let {
		sronly = false,
		id,
		children,
		inputClass = '',
		labelClass = '',
		value = 'on',
		onchange,
		...rest
	} = $props();
</script>

<!-- Give label a sr-only class if (sronly) is truthy -->
<input {id} type="checkbox" class="no-focus {inputClass}" {onchange} value={id} {...rest} />
<label for={id} class={[sronly && 'sr-only', labelClass]}>{@render children()}</label>