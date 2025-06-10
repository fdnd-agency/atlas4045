<script>
	let { title, children } = $props();
</script>

<fieldset>
	<legend>{title}</legend>
	{@render children()}
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
</style>
