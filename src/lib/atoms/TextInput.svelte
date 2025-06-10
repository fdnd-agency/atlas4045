<script>
	let {
		placeholder = 'Input',
		sronly = false,
		id,
		type = 'text',
		children,
		inputClass = '',
		labelClass = '',
		value = $bindable(''),
		inputRef = $bindable(),
		name,
		...rest
	} = $props();

	let uid = $props.id();
</script>

<!-- Give label a sr-only class if (sronly) is truthy -->
<label for={uid} class={[sronly && 'sr-only', labelClass]}>{@render children()}</label>
<input
	bind:value
	bind:this={inputRef}
	id={uid}
	{type}
	{placeholder}
	{name}
	class="no-focus {inputClass}"
	{...rest}
/>

<style>
	input {
		font-family: inherit;
		font-size: 1rem;

		color: var(--neutral-900);
		padding: var(--spacing-xxs) var(--spacing-sm);
		border: none;
		border-radius: var(--border-radius-sm);
    text-overflow: ellipsis;
		height: 2.5rem;

		transition-property: border, background-color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;

		&:not(:placeholder-shown) {
			border: 2px solid var(--blue-200);
		}

		&:focus {
			border: 2px solid var(--blue-600);
			background-color: var(--blue-100);
		}

		&::placeholder {
			color: var(--blue-400);
			font-weight: var(--font-weight-light);
		}
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
