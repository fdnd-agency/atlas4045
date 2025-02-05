<script>
  import PosterCard from '../molecules/PosterCard.svelte';

  let { posters } = $props();
</script>

<ul>
  <!-- ForEach -->
  <PosterCard />
  <!-- /Foreach -->
</ul>

<style>
</style>