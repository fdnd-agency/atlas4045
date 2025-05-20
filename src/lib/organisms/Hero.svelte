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

<style>
  header {
		--_page-padding: var(--spacing-md);
		--_padding: var(--spacing-md);
		--_margin: var(--spacing-md);
		background-image: url("/assets/gedenkposter.avif");
		background-color: var(--blue-900);
		background-size:cover;
		background-repeat: no-repeat;
		padding:var(--_padding);
	}

	header > * {
		background-color: rgb(255,255,255,0.9);
		padding:var(--spacing-sm);
	}

	h2 {
		font-size: var(--font-size-title-md);
		font-weight: var(--font-weight-light);
		text-align: center;
		margin-bottom: var(--spacing-md);
		font-weight:var(--font-weight-bold);
		color: var(--blue-700);
	}

	p {
		font-size: var(--font-size-md);
		color: var(--neutral-900);
		text-align: left;
		margin: auto;
		margin-bottom: var(--spacing-md);
		width: 100%;
	}

	.content-container {
		margin-bottom: var(--spacing-md);
	}

  @media screen and (min-width: 800px) {
		header {
			--_page-padding: var(--page-padding);
			--_padding: var(--spacing-xl);
			--_margin: var(--spacing-md);
			height: fit-content;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: var(--spacing-md);
			z-index:-1;
			top:6rem;
		}
    
		h2 {
      font-size: var(--font-size-title-xl);
      flex-shrink: 0;
		}
    
		p {
      font-size: var(--font-size-lg);
		}
    
        .content-container {
          column-count: 2;
          column-gap: var(--spacing-md);
          width:810px;
          margin-bottom: 0;
        }
	}
</style>