<script>
	let { 
    placeholder = "Input", 
    sronly = false, 
    id, 
    type = "text", 
    children, 
    inputClass = "", 
    labelClass = "",
    value = $bindable(""),
    ...rest
  } = $props();
</script>

<!-- Give label a sr-only class if (sronly) is truthy -->
<label for={id} class={[sronly && "sr-only", labelClass]} >{@render children()}</label>
<input bind:value {id} {type} {placeholder} class="no-focus {inputClass}" name={id} {...rest} />

<style>
	input {
    font-family: inherit;
    font-size: 1rem;

		color: var(--neutral-900);
		padding: var(--spacing-xxs) var(--spacing-sm);
		border: none;
		border-radius: var(--border-radius-pill);
		border: 2px solid var(--blue-100);
		text-overflow: ellipsis;

		transition-property: border, background-color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;

		&:not(:placeholder-shown) {
			border: 2px solid var(--blue-200);		}

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
