<script>
	let { children, href = null, type = null, onclick = null, class: classList = "", buttonClass = "", ...rest} = $props();
</script>

<!-- Renders <a> styled as button if a href is given -->
  {#if href}
	<a {...rest} {href} class={["no-focus", classList, buttonClass]}>
		{@render children()}
	</a>
<!-- Renders <button> with onclick event if onclick function is given -->
{:else if typeof onclick === "function" || type === "submit"}
	<button {...rest} {onclick} class={["no-focus", classList, buttonClass]}>
		{@render children()}
	</button>
<!-- Renders dummy <button> without onclick if neither is given -->
{:else}
  <button {...rest} class={["no-focus", classList, buttonClass]}>
    {@render children()}
  </button>
{/if}

<style>
	a, button {
    font-family: inherit;
		display: inline-block;
		width: fit-content;
		height: fit-content;
		padding: var(--spacing-xxs) var(--spacing-sm);
		border-radius: var(--border-radius-pill);
		border: 2px solid var(--neutral-400);
		text-align: center;
		text-decoration: none;
		/* font-weight: var(--font-weight-bold); */
		color: var(--neutral-900);
    background-color: var(--white);
    cursor: pointer;
    font-size: 1rem;

		transition-property: border, background-color, color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;

		&:hover,
		&:focus-visible {
			background-color: var(--brown-600);
			color: var(--white);
			border: 2px solid var(--brown-600);
		}
	}
</style>
