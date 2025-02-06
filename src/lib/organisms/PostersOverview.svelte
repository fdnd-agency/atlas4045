<script>
  import PosterCard from '../molecules/PosterCard.svelte';

  let { posters } = $props();
</script>

<ul>
  {#each posters as poster}
    <PosterCard name={poster.name} surname={poster.surname} address={poster.address} />
  {/each}
</ul>

<style>

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    padding-top: 3rem;
  }

</style>