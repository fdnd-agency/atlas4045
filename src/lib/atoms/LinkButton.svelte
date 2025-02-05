<script>
  let { children, href } = $props();
</script>

<a {href}>
  {@render children()}
</a>

<style>
  a {
    display: inline-block;
    text-align: center;
    padding: 0.25rem 0.8rem;
    border-radius: 3rem;
    border: 2px solid black;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
</style>