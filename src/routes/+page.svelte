<script>
	import Nav from '$lib/molecules/Nav.svelte';
	import NavItem from '$lib/atoms/NavItem.svelte';
	import PostersCarousel from '$lib/organisms/PostersCarousel.svelte';
	import Button from '$lib/atoms/Button.svelte';

	let { data } = $props();
	let { addresses } = data;
</script>

<main>
	<header>
		<h2>Herdenken door te vertellen.</h2>

		<div class="content-container">
			<p>
				In de jaren tussen 1940 en 1945 zijn door de Duitse bezetter meer dan 2800 mensen uit de
				Oosterparkbuurt gedeporteerd en vermoord in Oost-Europa. Het Joodse leven in de buurt, dat
				voor de oorlog bloeiende was, verdween.
			</p>

			<p>
				Wie waren deze mensen? Hoe zagen hun levens eruit? Wat hebben ze tijdens de oorlog meegemaakt?
				Op deze vragen proberen we met de gedenkposters antwoord te geven. Zo'n veertig buurtbewoners
				in wiens huizen Joodse mensen hebben gewoond hebben al onderzoek gedaan naar die oud-bewoners
				en hun verhalen opgeschreven. De gedenkposters hangen in april en mei door de hele buurt voor
				de ramen. Ook worden er wandelingen langs de posters georganiseerd.
			</p>

			<p>
				De gedenkposters zijn geïnspireerd op het project Namen en Nummers van kunstenaar Ida van der
				Lee. Ontdek hier meer over Namen en Nummers.
			</p>
		</div>
	</header>

	<div class="page-content">
		<section>
			<h3>Uitgelichte gedenkposters</h3>
	
			<PostersCarousel {addresses} />
		</section>
	
		<section class="section-CTA">
			<h3>Alle posters zien?</h3>
	
			<Button href="/adressen" class="highlight">Door naar alle adressen met een poster</Button>
		</section>
	</div>
	
</main>

<style>
	main {
		margin: 0 auto;
		padding: var(--spacing-sm) var(--page-padding) 0;
	}

	header {
		--_page-padding: var(--spacing-md);
		--_padding: var(--spacing-md);
		--_margin: var(--spacing-md);
		background-image: url("/assets/gedenkposter.avif");
		background-color: var(--blue-900);
		background-size:cover;
		background-repeat: no-repeat;
		padding:var(--_padding);
		margin:calc(-1 * var(--_margin)) calc(-1 * var(--_page-padding));
		width:calc(100% + 2* var(--_page-padding));
	}

	header > * {
		background-color: rgb(255,255,255,0.9);
		padding:var(--spacing-sm);
		
	}

	h2,
	h3 {
		font-size: var(--font-size-title-md);
		font-weight: var(--font-weight-light);
		color: var(--neutral-900);
		text-align: center;
		margin-bottom: var(--spacing-md);
	}
	h2 {
		font-weight:var(--font-weight-bold);
	}

	p {
		font-size: var(--font-size-md);
		color: var(--neutral-900);
		text-align: justify;
		margin: auto;
		margin-bottom: var(--spacing-md);
		width: 100%;
	}

	.content-container {
		margin-bottom: var(--spacing-md);
	}

	section {
		margin-bottom: var(--spacing-md);
		padding: var(--spacing-md) 0;
	}

	.section-CTA {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--blue-200);
		margin:calc(-1 * var(--spacing-md)) calc(-1 * var(--page-padding)) 0;
		width:calc(100% + 1.5 * var(--page-padding));
	}
	.page-content {
		position: relative;
		z-index:1;
		margin-top:100vh;
		background-color: var(--blue-100);
		margin:calc(-1 * var(--spacing-md)) calc(-1 * var(--page-padding)) 0;
		width:calc(100% + 2* var(--page-padding));
		padding:var(--spacing-md) var(--spacing-md) 0 var(--spacing-md);
	}

	@media screen and (min-width: 800px) {
		header {
			--_page-padding: var(--page-padding);
			--_padding: var(--spacing-xl);
			--_margin: var(--spacing-md);
			height: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap:wrap;
			gap: var(--spacing-md);
			position:sticky;
			z-index:-1;
			top:6rem;
		}
			

		header h2 {
			flex-shrink:0;
		}

		.content-container {
			column-count: 2;
			column-gap: var(--spacing-md);
			width:810px;
			margin-bottom: 0;
		}

		h2 {
			font-size: var(--font-size-title-xl);
		}

		p {
			font-size: var(--font-size-lg);
		}

		h3 {
			font-size: var(--font-size-title-md);
		}
	}
</style>
