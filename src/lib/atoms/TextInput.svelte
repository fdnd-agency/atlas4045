<script>
	let { 
    placeholder = "Input", 
    sronly = false, 
    id, 
    type = "text", 
    children, 
    inputClass = "", 
    labelClass = "",
    ...rest
  } = $props();
</script>

<!-- Give label a sr-only class if (sronly) is truthy -->
<label for={id} class={[sronly && "sr-only", labelClass]} >{@render children()}</label>
<input {id} {type} {placeholder} class="no-focus {inputClass}" name={id} {...rest} />

<style>
	input {
    font-family: inherit;
    font-size: 1rem;

		color: var(--brown-dark);
		padding: var(--spacing-xxs) var(--spacing-sm);
		border: none;
		border-radius: var(--border-radius-pill);
		border: 2px solid var(--brown-neutral);
		text-overflow: ellipsis;

		transition-property: border, background-color, color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;

		&:not(:placeholder-shown) {
			border: 2px solid var(--brown-dark);
		}

		&:focus {
			border: 2px solid var(--brown-neutral);
			background-color: var(--brown-neutral);
			color: white;

			&::placeholder {
				color: var(--white);
			}
		}

		&::placeholder {
			color: var(--brown-light);
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
