<script>
	import Nav from '$lib/molecules/Nav.svelte';
	import NavItem from '$lib/atoms/NavItem.svelte';
	import PostersCarousel from '$lib/organisms/PostersCarousel.svelte';
	import Button from '$lib/atoms/Button.svelte';

	let { data } = $props();
	let { posters } = data;
</script>

<main>
	<div class="hero-container">
		<h2>Herdenken door te vertellen.</h2>
		<enhanced:img
			src="/static/assets/gedenkposter.png"
			alt="Gedenkposter van Hijman Nol"
			class="hero-image"
		/>
	</div>

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

	<section>
		<h3 class="title-highlighted">Uitgelichte gedenkposters:</h3>

		<PostersCarousel {posters} />
	</section>

	<section class="section-CTA">
		<h3>Alle posters zien?</h3>

		<Button href="/posters">Door naar overzicht</Button>
	</section>
</main>

<style>
	main {
		margin: 0 auto;
		padding: var(--spacing-sm) var(--page-padding);
	}

	h2,
	h3 {
		font-size: var(--font-size-title-md);
		font-weight: var(--font-weight-bold);
		color: var(--neutral-900);
		text-align: center;
		margin-bottom: var(--spacing-md);
	}

	.title-highlighted {
		font-size: var(--font-size-lg);
	}

	.hero-image {
		width: 100%;
		height: auto;
		border-radius: var(--border-radius-md);
		margin: auto;
		display: block;
		margin-bottom: var(--spacing-md);
	}

	p {
		font-size: var(--font-size-md);
		color: var(--neutral-900);
		text-align: justify;
		margin: auto;
		margin-bottom: var(--spacing-md);
		width: 100%;
	}

	section {
		margin-bottom: var(--spacing-md);
		padding: var(--spacing-md) 0;
	}

	.section-CTA {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (min-width: 800px) {
		main {
			max-width: var(--max-width-desktop);
		}

		.hero-container {
			width: 100%;
			height: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row-reverse;
			gap: var(--spacing-md);
			margin: var(--spacing-lg) 0;
		}

		.hero-image {
			width: 40vw;
		}

		.content-container {
			column-count: 2;
			column-gap: var(--spacing-lg);
			margin-bottom: var(--spacing-lg);
		}

		h2 {
			font-size: var(--font-size-title-xl);
		}

		p {
			font-size: var(--font-size-lg);
		}

		h3 {
			font-size: var(--font-size-title-lg);
		}

		.title-highlighted {
			font-size: var(--font-size-title-sm);
		}
	}
</style>
