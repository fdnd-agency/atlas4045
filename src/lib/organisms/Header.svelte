<script>
	import Button from '$lib/atoms/Button.svelte'
</script>

<header>
	<img src="/assets/logo.avif" alt="4 Mei Comité Oosterparkbuurt" width="404" height="178" loading="eager"/>
	<div class="header-mail-buttons">
		<Button class="full-width" href="mailto:4meioosterparkbuurt@gmail.com" rel="noopener" title="Contact via email">contact</Button>
		<Button
			class="full-width"
			href="mailto:4meioosterparkbuurt@gmail.com?subject=Ik wil me abonneren op de nieuwsbrief"
      rel="noopener"
      title="Abonneer op nieuwsbrief"
			>nieuwsbrief</Button
		>
	</div>
	<h1>Gedenkposters</h1>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		width: fit-content;
		padding: 1rem;
		margin: auto;
	}

	img {
		grid-column: 1 / 1;
		grid-row: 1 / 2;
		width: 100%;
		max-width: 202px;
		height: auto;
	}

	.header-mail-buttons {
		grid-column: 2 / 3;

		gap: 0.2rem;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	h1 {
		grid-column: 1 / 3;
		font-size: 1.33rem;
		text-align: center;
	}
</style>
