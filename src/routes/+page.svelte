<script>
	import Nav from '$lib/molecules/Nav.svelte';
	import NavItem from '$lib/atoms/NavItem.svelte';
	import PostersCarousel from '$lib/organisms/PostersCarousel.svelte';

	let { data } = $props();
</script>

<main>
	<h2>Herdenken door te vertellen.</h2>
	<enhanced:img
		src="/static/assets/gedenkposter.png"
		alt="Gedenkposter van Hijman Nol"
		class="hero-image"
	/>

	<p>
		In de jaren tussen 1940 en 1945 zijn door de Duitse bezetter meer dan 2800 mensen uit de
		Oosterparkbuurt gedeporteerd en vermoord in Oost-Europa. Het Joodse leven in de buurt, dat voor
		de oorlog bloeiende was, verdween.
	</p>

	<p>
		Wie waren deze mensen? Hoe zagen hun levens eruit? Wat hebben ze tijdens de oorlog meegemaakt?
		Op deze vragen proberen we met de gedenkposters antwoord te geven. Zo'n veertig buurtbewoners in
		wiens huizen Joodse mensen hebben gewoond hebben al onderzoek gedaan naar die oud-bewoners en
		hun verhalen opgeschreven. De gedenkposters hangen in april en mei door de hele buurt voor de
		ramen. Ook worden er wandelingen langs de posters georganiseerd.
	</p>

	<p>
		De gedenkposters zijn geïnspireerd op het project Namen en Nummers van kunstenaar Ida van der
		Lee. Ontdek hier meer over Namen en Nummers.
	</p>

  <section>
    <h3>
      Uitgelichte gedenkposters:
    </h3>

    <PostersCarousel />
  </section>
</main>

<style>
	main {
		max-width: var(--max-width-mobile);
		margin: 0 auto;
		padding: var(--spacing-sm) var(--page-padding-mobile);
	}

	h2, h3 {
		font-size: var(--font-size-xxl);
		font-weight: var(--font-weight-bold);
		color: var(--neutral-900);
		text-align: center;
		margin-bottom: var(--spacing-md);
	}

  h3 {
    font-size: var(--font-size-lg);
  }

  .hero-image {
    width: 80%;
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
		width: 80%;
	}

	@media screen and (min-width: 800px) {
		main {
			max-width: var(--max-width-desktop);
			padding: var(--spacing-sm) var(--page-padding-desktop);
		}
	}
</style>
