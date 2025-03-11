<script>
  import Button from '$lib/atoms/Button.svelte'

  let password = $state('')
</script>

<form method="POST">
  <fieldset>
    <div>
      <label>Password</label>
      <input type="password" bind:value={password} name="password" required />
    </div>
    <Button type="submit">Login</Button>
  </fieldset>
  
</form>

<style>
  form {
    margin:5rem 0;
    display:grid;
    grid-template-columns: 1fr;
    max-width:30rem;
    place-self: center;
    gap:1rem
  }
  fieldset {
    display:flex;
    flex-direction:column;
    gap:1rem;
    border:none;
    align-items: center;
  }
  input {
    font:inherit;
    color:inherit;
    font-size: inherit;
    border:2px solid currentColor;
    border-radius:var(--border-radius-pill);
    padding: var(--spacing-xxs) var(--spacing-sm);
  }
</style>
