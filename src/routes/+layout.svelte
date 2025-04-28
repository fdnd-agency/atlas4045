<script>
  import Header from "$lib/organisms/Header.svelte"
  import { javascript } from "$lib/utils/javascriptEnabled.svelte.js"
  import { onMount } from "svelte"

  let { children } = $props();

  onMount(() => {
    // Check if JavaScript is enabled
    if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
      javascript.enabled = true;
    }
  });
</script>

<Header />

{@render children()}