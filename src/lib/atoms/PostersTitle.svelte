<script>
  import { page } from '$app/state';

  let { length } = $props();

	if (page.url.searchParams.get('naam')) {
		let name = $derived(page.url.searchParams.get('naam'));
	}

  if (page.url.searchParams.get('straat')) {
		let street = $derived(page.url.searchParams.get('straat'));
	}
</script>

{#if name && street}
	<h2>
		Gedenkposters met naam <span class="highlight">{name}</span> en straat
		<span class="highlight">{street}</span>
	</h2>
{:else if name}
	<h2>Gedenkposters met naam <span class="highlight">{name}</span></h2>
{:else if street}
	<h2>Gedenkposters met straat <span class="highlight">{street}</span></h2>
{:else}
	<h2>Alle gedenkposters ({length})</h2>
{/if}

<style>
	.highlight {
		color: var(--brown-600);
	}
</style>
