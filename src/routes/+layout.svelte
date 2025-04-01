<script>
  import Logout from "$lib/molecules/Logout.svelte"
  import Header from "$lib/organisms/Header.svelte"
  import ColourTester from "$lib/utils/ColourTester.svelte"
  import { javascript } from "$lib/utils/javascriptEnabled.svelte.js";
  import { onMount } from "svelte";

  let { children, data } = $props()
  let { isAuthenticated } = data

    // Check if javascript is enabled using onMount so that we only hide the submit button if JS is enabled
	onMount(() => {
		javascript.enabled = true;
	});
</script>

<!-- Devtool. Remove before actual site goes live -->
<!-- <ColourTester /> -->

<Logout {isAuthenticated} />

<Header />

{@render children()}