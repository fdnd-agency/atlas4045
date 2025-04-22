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
<input {id} type="checkbox" class="{inputClass}" {onchange} value={id} {...rest} />
<label for={id} class={[sronly && 'sr-only', labelClass]}>{@render children()}</label>

<style>
	input[type='checkbox'] {
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

	input[type='checkbox']::before {
		content: '';
		width: 0.65rem;
		height: 0.65rem;
		transform: scale(0);
		transition: 0.1s transform ease-in-out;
		background-color: var(--white);
	}

	input[type='checkbox']:checked::before {
		transform: scale(1);
	}
</style>
