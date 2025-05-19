<script>
  import { page } from '$app/state';

  let { length } = $props();

  let streets = $derived(page.url.searchParams.getAll('s'));
  let name = $derived(page.url.searchParams.get('n'));
</script>

<h2>
Alle adressen met een gedenkposter
{#if name}
  met naam <strong><span>{name}</span></strong>
{/if}
{#if streets?.length === 1}
	in straat <strong><span>{streets[0]}</span></strong>
{:else if streets?.length > 1}
	gefiltered op <strong><span>straat</span></strong>
{/if}
<span class="length">({length})</span>
</h2>

<style>
	h2 {
		font-weight: var(--font-weight-light);
	}
</style>