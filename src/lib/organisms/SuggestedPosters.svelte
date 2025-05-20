<script>
	import { PostersCarousel, Button } from '$lib/index';
	let { addresses } = $props();
</script>

<div>
  <section class="posters">
    <h3>Uitgelichte gedenkposters</h3>

    <PostersCarousel {addresses} />
  </section>

  <section class="CTA">
    <h3>Alle posters zien?</h3>

    <Button href="/adressen" class="highlight">Bekijk alle adressen met een poster</Button>
  </section>
</div>

<style>
  div > * {
		padding: calc(var(--spacing-md)*2) var(--page-padding) var(--spacing-md);
	}

  h3 {
		font-size: var(--font-size-title-md);
		font-weight: var(--font-weight-light);
		text-align: center;
		margin-bottom: var(--spacing-md);
	}

	h3 {
		margin:var(--spacing-md) 0 calc(1.5 * var(--spacing-lg));
		background-color: var(--blue-200);
		width: fit-content;
		padding: var(--spacing-xs);
		font-weight:var(--font-weight-medium);
		justify-self: center;
	}

	section {
		margin-bottom: var(--spacing-md);
		padding: var(--spacing-md) 0;
    display: flex;
		flex-direction: column;
    align-items: center;
	}

	.CTA {
		background-color: var(--blue-200);
		margin-bottom: 0;
	}

	.CTA h3 {
		margin-bottom:var(--spacing-md)
	}

	div {
		z-index:1;
		background-color: var(--blue-100);
	}

	@media screen and (min-width: 800px) {
		h3 {
			font-size: var(--font-size-title-md);
		}
	}
</style>