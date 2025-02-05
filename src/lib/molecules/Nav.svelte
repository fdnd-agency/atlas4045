<script>
  let { children } = $props();
</script>

<nav>
  <ul>
    {@render children()}
  </ul>
</nav>

<style>
  nav {
    padding: 1rem 4rem;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
</style>