<script>
  import { page } from '$app/state';

  let { length } = $props();

  let streets = $derived(page.url.searchParams.getAll('s'));
</script>

<h2>
{#if streets?.length === 1}
	Alle addressen met een gedenkposter in straat <strong><span class="highlight">{streets[0]}</span></strong>
{:else if streets?.length > 1}
	Alle addressen met een gedenkposter gefiltered op <strong><span class="highlight">straat</span></strong>
{:else}
	Alle addressen met een gedenkposter
{/if}
<span class="length">({length})</span>
</h2>
<style>
	h2 {
		font-weight: var(--font-weight-light);
	}
	.highlight {
		color: var(--red-900);
	}

	span.length {
		font-size: 1rem;
	}
</style>
