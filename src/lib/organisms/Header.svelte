<script>
	import Divider from '$lib/atoms/Divider.svelte';
	import LinkButton from '$lib/atoms/LinkButton.svelte';
</script>

<header>
	<img src="/assets/logo.avif" alt="4 Mei Comité Oosterparkbuurt" width="404" height="178" />
	<div class="header-mail-buttons">
		<LinkButton class="full-width" href="mailto:4meioosterparkbuurt@gmail.com">contact</LinkButton>
		<LinkButton
			class="full-width"
			href="mailto:4meioosterparkbuurt@gmail.com?subject=Ik wil me abonneren op de nieuwsbrief"
			>nieuwsbrief</LinkButton
		>
	</div>
	<h1>Gedenkposters</h1>
</header>
<Divider margin="0 4rem" />

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
