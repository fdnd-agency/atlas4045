<script>
	import TextInput from '$lib/atoms/TextInput.svelte';
	import Button from '$lib/atoms/Button.svelte';
	import FilterChip from '$lib/atoms/FilterChip.svelte';
	import { page } from '$app/state';
	let { title, onchange, name } = $props();

	let enteredValue = $state('');
	let activeValues = $state([]);

	// Extract active names from the URL and add them to the activeNames array
	page.url.searchParams.forEach((value, key) => {
		key == name && activeValues.push(value);
	});

	function addValueHandler() {
		if (enteredValue.length > 0) {
			activeValues.push(enteredValue);
			enteredValue = '';
		}
	}

	function removeValueHandler(event) {
		activeValues = activeValues.filter((value) => value !== event.target.id);
		onchange();
	}
</script>

<fieldset>
	<legend>Zoeken op {title}</legend>
	<div>
		<TextInput bind:value={enteredValue} id={name} placeholder="Jacob..." sronly={true} name=""
			>Zoeken op {title}</TextInput
		>
		<Button class="highlight" onclick={addValueHandler} buttonClass={$css('add-value')}>+</Button>
	</div>
	<ul>
		{#key activeValues}
			{#each activeValues as activeValue}
				<FilterChip
					id={activeValue}
					label={activeValue}
					{name}
					onchange={removeValueHandler}
				>
					{activeValue}
				</FilterChip>
			{/each}
		{/key}
	</ul>
</fieldset>

<style>
	fieldset {
		border: none;
		padding: 0;
		margin: var(--spacing-lg) 0;
	}

	legend {
		font-family: var(--font-family-fraunces);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-regular);
		margin-bottom: var(--spacing-sm);
	}

	div {
		display: flex;
		gap: var(--spacing-xs);
		max-width: 100%;
		margin-bottom: var(--spacing-sm);
	}

	ul {
		padding-top: var(--spacing-md);
		display: flex;
		gap: var(--spacing-xxs);
		flex-wrap: wrap;
	}

	.add-value {
		/* color: var(--blue-900) !important; */
		border: 2px solid var(--blue-100) !important;
	}
</style>
