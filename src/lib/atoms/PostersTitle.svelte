<script>
  import { page } from '$app/state';

  let { length } = $props();

  let streets = $derived(page.url.searchParams.getAll('s'));
  let name = $derived(page.url.searchParams.get('n'));
</script>

<h2>
Alle adressen met een gedenkposter
{#if name}
  met naam <strong><span class="highlight">{name}</span></strong>
{/if}
{#if streets?.length === 1}
	in straat <strong><span class="highlight">{streets[0]}</span></strong>
{:else if streets?.length > 1}
	gefiltered op <strong><span class="highlight">straat</span></strong>
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
