<script>
  import PosterCard from '../molecules/PosterCard.svelte';
</script>

<main>
  <nav>
    <h2>Overzicht</h2>
    <a href="./">Kaart</a>
  </nav>
  <ul>
    <!-- ForEach -->
    <PosterCard />
    <!-- /Foreach -->
  </ul>
</main>