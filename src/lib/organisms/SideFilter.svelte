<script>
	import Button from '$lib/atoms/Button.svelte';
	import { javascript } from '$lib/utils/javascriptEnabled.svelte.js';
</script>

<aside>
	<form>
		<Button
			class={{ 'sr-only': javascript.enabled, highlight: true }}
			buttonClass={$css('show-on-focus')}
			type="submit"
		>
			Toepassen
		</Button>
		<!-- <FilterSection
			title="Straat"
			items={[
				'Straatnaam 1',
				'Straatnaam 2',
				'Straatnaam 3',
				'Straatnaam 4',
				'Straatnaam 5',
				'Straatnaam 6',
				'Straatnaam 7'
			]}
		/>
		<FilterSection
			title="Naam"
			items={['Naam 1', 'Naam 2', 'Naam 3', 'Naam 4']}
		/> -->
	</form>
</aside>

<style>
	aside {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
    background-color: var(--white);
	}

  .show-on-focus:focus-visible {
		position: static;
		display: inline-block;
		width: fit-content;
		height: fit-content;
		padding: var(--spacing-xxs) var(--spacing-sm);
		overflow: visible;
		clip: auto;
		white-space: normal;
		border-width: 0;
	}
</style>
