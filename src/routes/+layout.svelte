<script>
  import Header from "../lib/organisms/Header.svelte";

  let { children } = $props();
</script>

<Header />

{@render children()}