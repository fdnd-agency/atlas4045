<script>
  import Nav from "$lib/molecules/Nav.svelte"
  import NavItem from "$lib/atoms/NavItem.svelte"
  import PostersOverview from "$lib/organisms/PostersOverview.svelte"

  let { data } = $props();
</script>

<!-- Overview section -->
<main>
  <PostersOverview posters={data.posters} />
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