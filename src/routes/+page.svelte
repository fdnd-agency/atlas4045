<script>
  import Nav from "$lib/molecules/Nav.svelte"
  import NavItem from "$lib/atoms/NavItem.svelte"
  import PostersOverview from "$lib/organisms/PostersOverview.svelte"

  let { data } = $props();
</script>

<main>
  <h2>Herdenken door te vertellen.</h2>
  <enhanced:img src="/static/assets/gedenkposter.png" alt="Gedenkposter van Hijman Nol" class="hero-image"/>
</main>

<style>
  main {
    max-width: var(--max-width-mobile);
    margin: 0 auto;
    padding: var(--spacing-sm) var(--page-padding-mobile);
  }

  h2 {
    font-size: var(--font-size-xxl);
    font-weight: var(--font-weight-bold);
    color: var(--neutral-900);
    text-align: center;
    margin-bottom: var(--spacing-md);
  }

  .hero-image {
    width: 80%;
    height: auto;
    border-radius: var(--border-radius-md);
    margin: auto;
    display: block;
  }

  @media screen and (min-width: 800px) {
    main {
      max-width: var(--max-width-desktop);
      padding: var(--spacing-sm) var(--page-padding-desktop);
    }
  }
</style>