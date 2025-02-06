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
    padding: var(--spacing-xxs) var(--spacing-sm);
    border-radius: var(--border-radius-pill);
    border: 2px solid var(--color-brown-dark);
    height: fit-content;
    text-decoration: none;
    color: var(--color-brown-dark);
    font-weight: var(--font-weight-bold);
    width: fit-content;

    transition-property: border, background-color, color;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;

    &:hover, 
    &:focus {
      background-color: var(--color-brown);
      color: var(--color-white);
      border: 2px solid var(--color-brown);
    }
  }

  .full-width {
    width: 100%;
  }
</style>