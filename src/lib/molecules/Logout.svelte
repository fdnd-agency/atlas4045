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
    right:1rem;
    top:1rem;
    z-index:999;
  }
</style>


