<script>
	let {
		sronly = true,
		id,
		children,
		inputClass = '',
		labelClass = '',
		checked = '',
		value = 'on',
		symbol = '',
    onchange,
	} = $props();
</script>

<div style="--symbol: '{symbol}'">
	<!-- Give label a sr-only class if (sronly) is truthy -->
	<label for={id} class={[sronly && 'sr-only', labelClass]}>{@render children()}</label>
	<input {id} type="checkbox" class="no-focus {inputClass}" {onchange} />
</div>

<style>
	div {
		position: relative;

    width: 2rem;
    height: 2rem;

		&::before {
			border: 2px solid var(--white);
      color: var(--black);
      background-color: var(--white);
			border-radius: var(--border-radius-pill);
			text-align: center;
			padding: 0.4rem 0.65rem;
			content: var(--symbol);
			left: 0;
			position: absolute;
			top: 0;
			font-size: 0.8rem;
			font-weight: var(--font-weight-bold);
			pointer-events: none;

			transition-property: border, background-color, color;
			transition-duration: 0.15s;
			transition-timing-function: ease-in-out;
		}

    &:has(input:checked)::before {
			border: 2px solid var(--white);
			color: var(--white);
      background-color: var(--brown-dark);
		}

    &:has(input:focus-visible)::before,
    &:has(input:hover)::before {
			border: 2px solid var(--brown-neutral);
			color: var(--white);
      background-color: var(--brown-neutral);
		}
	}

	input {
		opacity: 0;
		height: 2rem;
		width: 2rem;

		position: absolute;
		left: 0;
		top: 0;
	}
</style>
