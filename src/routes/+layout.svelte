<script>
  import Logout from "$lib/molecules/Logout.svelte"
  import Header from "$lib/organisms/Header.svelte"

  let { children, data } = $props()  

  let { isAuthenticated } = data
</script>


<Logout {isAuthenticated} />

<Header />

{@render children()}