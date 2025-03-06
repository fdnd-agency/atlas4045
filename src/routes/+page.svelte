<script>
  import PosterIntroductie from "$lib/organisms/PosterIntroductie.svelte"

  import Nav from "$lib/molecules/Nav.svelte"
  import NavItem from "$lib/atoms/NavItem.svelte"
  import PostersOverview from "$lib/organisms/PostersOverview.svelte"

  let { data } = $props();
</script>

<main>
  <h1>Gedenkposters</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
</main>

<style>
  main {
    max-width: var(--max-width-mobile);
    margin: 0 auto;
    padding: var(--spacing-sm) var(--page-padding-mobile);
  }

  @media screen and (min-width: 800px) {
    main {
      max-width: var(--max-width-desktop);
      padding: var(--spacing-sm) var(--page-padding-desktop);
    }
  }
</style>