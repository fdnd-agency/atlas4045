<script>
  import PosterIntroductie from "$lib/organisms/PosterIntroductie.svelte"

  import Nav from "$lib/molecules/Nav.svelte"
  import NavItem from "$lib/atoms/NavItem.svelte"
  import PostersOverview from "$lib/organisms/PostersOverview.svelte"

  let { data } = $props();
  let { posters } = data;
</script>

<PosterIntroductie />

<!-- Overview section -->
<main>
  <Nav>
    <NavItem active={true}>Overzicht</NavItem>
    <NavItem href="/">Kaart</NavItem>
  </Nav>

  <PostersOverview {posters} />
</main>

<style>
  main {
    max-width: var(--max-width-mobile);
    margin: 0 auto;
    padding: 1rem;
  }

  @media screen and (min-width: 800px) {
    main {
      max-width: var(--max-width-desktop);
    }
  }
</style>