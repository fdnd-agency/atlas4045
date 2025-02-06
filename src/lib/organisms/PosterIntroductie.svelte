<script>
	import Divider from '$lib/atoms/Divider.svelte';
	import LinkButton from '$lib/atoms/LinkButton.svelte';
</script>

<div class="query-container">
	<section>
		<h2>Wat is een gedenkposter?</h2>
		<img src="/assets/gedenkposter.avif" alt="Gedenkposter voorbeeld" width="419" height="585" />
		<p>
			In de jaren tussen 1940 en 1945 zijn door de Duitse bezetter meer dan 2800 mensen uit de
			Oosterparkbuurt gedeporteerd en vermoord in Oost-Europa. Het Joodse leven in de buurt, dat
			voor de oorlog bloeiende was, verdween.
			<br />
			<br />
			Wie waren deze mensen? Hoe zagen hun levens eruit? Wat hebben ze tijdens de oorlog meegemaakt?
			Op deze vragen proberen we met de gedenkposters antwoord te geven. Zo'n veertig buurtbewoners in
			wiens huizen Joodse mensen hebben gewoond hebben al onderzoek gedaan naar die oud-bewoners en hun
			verhalen opgeschreven. De gedenkposters hangen in april en mei door de hele buurt voor de ramen.
			Ook worden er wandelingen langs de posters georganiseerd.
		</p>
		<LinkButton href="./">Zelf een gedenkposter maken</LinkButton>
	</section>
</div>
<Divider margin="0 4rem" />

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		max-width: var(--max-width-mobile);
		padding: 1rem;
		margin: 1rem auto;
	}

	h2 {
		font-size: 1.5rem;
		text-align: center;
	}

	img {
		width: 100%;
		height: auto;
	}

	p {
		font-size: 1rem;
		text-align: justify;
	}

  @container (min-width: 500px) {
		section {
			display: grid;
			grid-template-columns: 1fr 1.2fr;
			grid-template-rows: auto auto auto;
			gap: 2rem;
			max-width: var(--max-width-desktop);
			margin: 2rem auto;
		}

		img {
			grid-column: 1 / 1;
			grid-row: 1 / 4;
		}

		h2 {
			grid-column: 2 / 3;
			align-self: end;
			font-size: 2rem;
      text-align: start;
		}

		p {
			grid-column: 2 / 3;
		}
	}

	@container (min-width: 780px) {
		h2 {
			font-size: 3rem;
		}
	}
</style>
