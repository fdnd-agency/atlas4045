<script>
  let { children, href, class: classList = "" } = $props();
</script>

<a {href} class={classList}>
  {@render children()}
</a>

<style>
  a {
    display: inline-block;
    text-align: center;
    padding: 0.25rem 0.8rem;
    border-radius: 3rem;
    border: 2px solid black;
    height: fit-content;
    text-decoration: none;
    color: black;
    font-weight: bold;
    width: fit-content;
  }

  .full-width {
    width: 100%;
  }
</style>