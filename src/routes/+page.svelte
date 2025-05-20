<script>
	import { PostersCarousel, Button, Hero } from '$lib/index';
	let { data } = $props();
</script>

<svelte:head>
  <title>Atlas Oosterparkbuurt - Homepagina</title>
  <meta name="description" content="Atlas Oosterparkbuurt is een website die gedenkposters van de Oosterparkbuurt in Amsterdam bevat. Deze posters zijn gemaakt door vrijwilligers en zijn bedoeld om de joodse slachtoffers van de oorlog in de Oosterparkbuurt te herdenken." />
</svelte:head>

<main>
	<Hero />

	<div class="page-content">
		<section class="section-suggested">
			<h3>Uitgelichte gedenkposters</h3>
	
			<PostersCarousel addresses={data.addresses} />
		</section>
	
		<section class="section-CTA">
			<h3>Alle posters zien?</h3>
	
			<Button href="/adressen" class="highlight">Bekijk alle adressen met een poster</Button>
		</section>
	</div>
	
</main>

<style>
	main {
		margin: 0 auto;
	}

	/* WHITESPACE */
	main > .page-content > * {
		padding: calc(var(--spacing-md)*2) var(--page-padding) var(--spacing-md);
	}

	/* STYLING */
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

	.section-CTA {
		background-color: var(--blue-200);
		margin-bottom: 0;
	}

	.section-CTA h3 {
		margin-bottom:var(--spacing-md)
	}

	.page-content {
		z-index:1;
		background-color: var(--blue-100);
	}

	@media screen and (min-width: 800px) {
		h3 {
			font-size: var(--font-size-title-md);
		}
	}
</style>