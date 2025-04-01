<script>
	let {
		sronly = false,
		id,
		children,
		inputClass = '',
		labelClass = '',
		checked = '',
		value = 'on',
    onchange,
	} = $props();
</script>
	<!-- Give label a sr-only class if (sronly) is truthy -->
	<input {id} type="checkbox" class="no-focus {inputClass}" {onchange} />
	<label for={id} class={[sronly && 'sr-only', labelClass]}>{@render children()}</label>

<style>
	input {

	}
</style>
