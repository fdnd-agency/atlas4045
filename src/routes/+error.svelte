<script>
    import { page } from '$app/stores';
</script>

<main>
  <h2>Er is iets fout gegaan.</h2>
  <p>Deze pagina bestaat niet of is tijdelijk niet beschikbaar.</p>
  <p class="error-message">{$page.status}: {$page.error.message}</p>
</main>

<style>
  main {
    max-width: var(--max-width-mobile);
    margin: 0 auto;
    padding: var(--spacing-sm) var(--page-padding-mobile);
  }

h2 {
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weight-bold);
  color: var(--neutral-900);
  margin-bottom: var(--spacing-md);
  width: 80%;
  margin: auto;
  padding-bottom: var(--spacing-md);
}

p {
  font-size: var(--font-size-md);
  color: var(--neutral-900);
  text-align: justify;
  margin: auto;
  margin-bottom: var(--spacing-md);
  width: 80%;
}

.error-message {
  font-size: var(--font-size-md);
  color: var(--brown-600);
}

@media screen and (min-width: 800px) {
  main {
    max-width: var(--max-width-desktop);
    padding: var(--spacing-sm) var(--page-padding-desktop);
  }
}
</style>