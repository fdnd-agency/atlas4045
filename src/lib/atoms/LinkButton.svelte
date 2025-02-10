<script>
  let { children, href, class: classList = "", rel = "", title ="" } = $props();
</script>

<a {href} class={classList} {rel} {title}>
  {@render children()}
</a>

<style>
  a {
    display: inline-block;
    width: fit-content;
    height: fit-content;
    padding: var(--spacing-xxs) var(--spacing-sm);
    border-radius: var(--border-radius-pill);
    border: 2px solid var(--color-brown-dark);
    text-align: center;
    text-decoration: none;
    font-weight: var(--font-weight-bold);
    color: var(--color-brown-dark);

    transition-property: border, background-color, color;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;

    &:hover, 
    &:focus-visible {
      background-color: var(--color-brown);
      color: var(--color-white);
      border: 2px solid var(--color-brown);
    }
  }
</style>