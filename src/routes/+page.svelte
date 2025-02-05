<script>
  import PosterIntroductie from "../lib/organisms/PosterIntroductie.svelte";

  import Nav from "../lib/molecules/Nav.svelte";
  import NavItem from "../lib/atoms/NavItem.svelte";
  import PostersOverview from "../lib/organisms/PostersOverview.svelte";
</script>

<PosterIntroductie />

<!-- Overview section -->
<main>
  <Nav>
    <NavItem active={true}>Overzicht</NavItem>
    <NavItem href="/">Kaart</NavItem>
  </Nav>
  
  <PostersOverview posters={{}} />
</main>
