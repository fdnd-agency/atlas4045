<script>
	import Button from '$lib/atoms/Button.svelte';
	import Nav from '$lib/molecules/Nav.svelte';
	import NavItem from '$lib/atoms/NavItem.svelte';
	import getCurrentPage from '$lib/utils/getCurrentPage';

  import { page } from '$app/state';

  let currentPage = $derived(getCurrentPage(page.url.pathname));
</script>

<header>
	<img
		src="/assets/logo.avif"
		alt="4 Mei Comité Oosterparkbuurt"
		width="404"
		height="178"
		loading="eager"
	/>

	<Nav>
		<NavItem active={currentPage === 'home'} href="/">Gedenkposters</NavItem>
		<NavItem active={currentPage === 'overview'} href="/posters">Overzicht</NavItem>
		<NavItem>Kaart</NavItem>
	</Nav>
</header>

<style>
	header {
		display: flex;
		width: 100%;
		padding: var(--spacing-sm) var(--page-padding-mobile);
    margin-bottom: var(--spacing-sm);
		box-shadow: 0 -20px 10px 20px rgba(0, 0, 0, 0.303);
    align-items: center;
	}

	img {
		width: 100%;
		max-width: 151px;
		height: auto;
	}

	@media screen and (min-width: 500px) {
		header {
			padding: var(--spacing-sm) var(--page-padding-desktop);
		}
	}
</style>
