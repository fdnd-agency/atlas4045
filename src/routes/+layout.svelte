<script>
  import Logout from "$lib/molecules/Logout.svelte"
  import Header from "$lib/organisms/Header.svelte"
  import ColourTester from "$lib/utils/ColourTester.svelte"

  let { children, data } = $props()  

  let { isAuthenticated } = data
</script>

<!-- Devtool. Remove before actual site goes live -->
<!-- <ColourTester /> -->

<Logout {isAuthenticated} />

<Header />

{@render children()}