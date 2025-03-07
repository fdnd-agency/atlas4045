<script>
  import Button from '$lib/atoms/Button.svelte'

  let { isAuthenticated } = $props()  
</script>

{#if isAuthenticated}
<form method="POST" action="/logout">
  <Button type="submit">Logout</Button>
</form>
{/if}

<style>
  form {
    position: fixed;
    right: var(--page-padding-mobile);
    bottom: 2rem;
    z-index: 999;

    @media (min-width: 500px) {
      top: 2rem;
      right: var(--page-padding-desktop);
      bottom: auto;
    }
  }

</style>


