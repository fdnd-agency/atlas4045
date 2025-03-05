<script>
	import Button from '$lib/atoms/Button.svelte';
  import Nav from '$lib/molecules/Nav.svelte';
  import NavItem from '$lib/atoms/NavItem.svelte';
</script>

<header>
	<img
		src="/assets/logo.avif"
		alt="4 Mei Comité Oosterparkbuurt"
		width="404"
		height="178"
		loading="eager"
	/>
	<h1>Gedenkposters</h1>
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto;
		width: fit-content;
		padding-top: 1rem;
		margin: auto;
	}

	img {
		grid-column: 1 / 1;
		grid-row: 1 / 2;
		width: 100%;
		max-width: 151px;
		height: auto;
	}

	h1 {
		grid-column: 1 / 3;
		font-size: 1.33rem;
		text-align: center;
	}

	@media screen and (min-width: 500px) {
    header {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: var(--max-width-desktop);
    }
	}
</style>
