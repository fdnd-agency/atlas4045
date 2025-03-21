<script>
  import { page } from '$app/state';

  let { length } = $props();

	let filterMessage = 'Adressen met een gedenkposter gevonden met';
  let name = $derived(page.url.searchParams.get('naam'));
  let street = $derived(page.url.searchParams.get('straat'));

</script>

<h2>
{#if name && street}
	{filterMessage} <strong>naam <span class="highlight">{name}</span></strong> <br>en <strong>straat
	<span class="highlight">{street}</span></strong>
{:else if name}
	{filterMessage} <strong>naam <span class="highlight">{name}</span></strong>
{:else if street}
	{filterMessage} <strong>straat <span class="highlight">{street}</span></strong>
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
		color: var(--blue-600);
	}

	span.length {
		font-size: 1rem;
	}
</style>
