<script>
  import Button from '$lib/atoms/Button.svelte'

  let { isAuthenticated } = $props()  
</script>

{#if isAuthenticated}
<form method="POST" action="/logout">
  <Button type="submit" style="background-color: var(--white);">Logout</Button>
</form>
{/if}

<style>
  form {
    position: fixed;
    right:1rem;
    bottom:1rem;
    z-index:999;

    @media (min-width:800px) {
      top:1rem;
      bottom:auto;
    }
  }

</style>


