<script>
	let {
		children,
		href = null,
		type = null,
		onclick = null,
		class: classList = '',
		buttonClass = '',
		...rest
	} = $props();
</script>

<!-- Renders <a> styled as button if a href is given -->
{#if href}
	<a {...rest} {href} class={['no-focus', classList, buttonClass]}>
		{@render children()}
	</a>
	<!-- Renders <button> with onclick event if onclick function is given -->
{:else if typeof onclick === 'function' || type === 'submit'}
	<button {...rest} {onclick} class={['no-focus', classList, buttonClass]}>
		{@render children()}
	</button>
	<!-- Renders dummy <button> without onclick if neither is given -->
{:else}
	<button {...rest} class={['no-focus', classList, buttonClass]}>
		{@render children()}
	</button>
{/if}

<style>
	a,
	button {
		font-family: inherit;
		display: inline-block;
		width: fit-content;
		height: fit-content;
		text-align: center;
		color: var(--neutral-900);
		cursor: pointer;
		font-size: 1rem;
		background: transparent;
		text-decoration: none;
		padding: 0;

		transition-property: color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;
		border: none;

		&:hover,
		&:focus,
		&:focus-visible {
			color: var(--red-600);
			text-decoration: underline;
		}
	}

	.highlight {
		border-radius: var(--border-radius-pill);
		background-color: var(--blue-500);
		color: #fff;
		padding: var(--spacing-xs) var(--spacing-sm);
		box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.2);

		&:hover,
		&:focus,
		&:focus-visible {
			color: #fff;
			background-color: var(--blue-700);
			text-decoration: none;
		}
	}
</style>
