<script>
	import PosterCard from '../molecules/PosterCard.svelte';
	import OverviewTitle from '$lib/molecules/OverviewTitle.svelte';

	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { addresses = [] } = $props();
</script>

<section class="overview">
	<header>
		<OverviewTitle length={addresses.length} />
	</header>

	{#if addresses.length > 0}
		<ul>
			{#each addresses as address (address.id)}
				<div
					transition:fade={{ duration: 300, easing: cubicOut }}
					animate:flip={{ duration: 300, easing: cubicOut }}
				>
					<PosterCard
						name={address?.person?.[0]?.last_name ?? 'Onbekend'}
						street={address?.street ?? 'Onbekend'}
						house_number={address?.house_number ?? 'Onbekend'}
						floor={address?.floor}
						addition={address?.addition}
						image={address?.poster?.covers?.[0]?.directus_files_id?.id ?? ''}
						width={address?.poster?.covers?.[0]?.directus_files_id?.width ?? 419}
						height={address?.poster?.covers?.[0]?.directus_files_id?.height ?? 585}
						id={address?.id ?? ''}
					/>
				</div>
			{/each}
		</ul>
	{:else}
		<p>Geen posters gevonden. Probeer de filters te wijzigen, of probeer het later opnieuw.</p>
	{/if}
</section>

<style>
	header {
		display: flex;
		gap: var(--spacing-md);
		flex-direction: column;
		align-items: center;
		padding: var(--spacing-md) var(--spacing-xs) 0;
	}

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--spacing-sm);
		padding-top: var(--spacing-sm);
	}

	p {
		padding-top: var(--spacing-lg);
	}

	section.overview {
		padding: 0 var(--page-padding);
	}

	@media screen and (min-width: 800px) {
		div:global(:has(.landscape)) {
			grid-column: span 2;
		}
	}

	@media screen and (min-width: 940px) {
		header {
			flex-direction: row;
			justify-content: space-between;
		}

		ul {
			padding-top: var(--spacing-md);
		}

		section.overview {
			padding: 0 var(--spacing-md);
		}
	}
</style>
