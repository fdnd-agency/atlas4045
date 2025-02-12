<script>
	let { children, href = null,  onclick = null, class: classList = "", type = "button" } = $props();
</script>

<!-- Renders <a> styled as button if a href is given -->
{#if href}
	<a {href} class="no-focus {classList}">
		{@render children()}
	</a>
<!-- Renders <button> with onclick event if onclick function is given -->
{:else if typeof onclick === "function"}
	<button {type} {onclick} class="no-focus {classList}">
		{@render children()}
	</button>
<!-- Renders dummy <button> without onclick if neither is given -->
{:else}
  <button {type} class="no-focus {classList}">
    {@render children()}
  </button>
{/if}

<style>
	a, button {
		display: inline-block;
		width: fit-content;
		height: fit-content;
		padding: var(--spacing-xxs) var(--spacing-sm);
		border-radius: var(--border-radius-pill);
		border: 2px solid var(--brown-dark);
		text-align: center;
		text-decoration: none;
		font-weight: var(--font-weight-bold);
		color: var(--brown-dark);

		transition-property: border, background-color, color;
		transition-duration: 0.15s;
		transition-timing-function: ease-in-out;

		&:hover,
		&:focus-visible {
			background-color: var(--brown-neutral);
			color: var(--white);
			border: 2px solid var(--brown-neutral);
		}
	}
</style>
