<script>
	import PosterCard from '../molecules/PosterCard.svelte';
  import PostersTitle from '$lib/atoms/PostersTitle.svelte';
	import PostersFilter from '$lib/organisms/PostersFilter.svelte';

	import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
	import { cubicOut } from "svelte/easing";

	let { posters = [] } = $props();
</script>

<header>
  <PostersTitle length={posters.length} />
  <PostersFilter />
</header>

{#await posters}
	<p>Loading posters...</p>
{:then posters}
	{#if posters.length > 0}
		<ul>
			{#each posters as posterData (posterData.id)}
      <div transition:fade={{duration: 300, easing: cubicOut}} animate:flip={{duration: 300, easing: cubicOut}}>
				<PosterCard
					name={posterData.person?.[0]?.last_name ?? 'Onbekend'}
					street={posterData.street ?? 'Onbekend'}
					house_number={posterData.house_number ?? 'Onbekend'}
					floor={posterData?.floor}
					addition={posterData?.addition}
					image={posterData.poster?.covers?.[0]?.directus_files_id?.id ?? ''}
					width={posterData.poster?.covers?.[0]?.directus_files_id?.width ?? 419}
					height={posterData.poster?.covers?.[0]?.directus_files_id?.height ?? 585}
					id={posterData.poster?.id ?? ''}
				/>
      </div>
			{/each}
		</ul>
	{:else}
		<p>
		  Geen posters gevonden. Probeer de filters te wijzigen, of probeer het later opnieuw.
		</p>
	{/if}
{:catch error}
	<p>error loading posters: {error.message}</p>
{/await}

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--spacing-sm);
		padding-top: var(--spacing-sm);
	}

  p {
    padding-top: var(--spacing-lg);
  }

	header {
		display: flex;
    gap: var(--spacing-md);
		flex-direction: column;
		align-items: center;
		padding-top: var(--spacing-md);
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
      padding-top: var(--spacing-lg);
    }
  }
</style>
