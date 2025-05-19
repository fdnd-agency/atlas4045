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

	let uid = $props.id();
</script>

<!-- Give label a sr-only class if (sronly) is truthy -->
<input id={uid} type="checkbox" class={inputClass} {onchange} value={id} {...rest} />
<label for={uid} class={[sronly && 'sr-only', labelClass]}>{@render children()}</label>

<style>
	input {
		appearance: none;
		background-color: transparent;
		margin: 0;
		font: inherit;
		color: currentColor;
		width: 1.15rem;
		height: 1.15rem;
		border: 0.15rem solid var(--white);
		border-radius: var(--border-radius-sm);
		transform: translateY(-0.08rem);
		display: grid;
		place-content: center;
	}

	input::before {
		content: '';
		width: 0.65rem;
		height: 0.65rem;
		transform: scale(0);
		transition: 0.1s transform ease-in-out;
		background-color: var(--white);
	}

	input:checked::before {
		transform: scale(1);
	}

	input:hover,
	input:has(+ label:hover) {
		background-color: var(--blue-600);
	}

	input:hover::before,
	input:has(+ label:hover)::before {
		transform: scale(0.4);
	}

	input:checked:hover::before,
	input:checked:has(+ label:hover)::before {
		transform: scale(0.85);
	}
</style>
