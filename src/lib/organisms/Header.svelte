<script>
	import { Nav, NavItem } from '$lib/index';
	import getCurrentPage from '$lib/utils/getCurrentPage';
	import { page } from '$app/state';

	let currentPage = $derived(getCurrentPage(page.url.pathname));
</script>

<header>
	<a href="/">
		<img
			src="/assets/logo.avif"
			alt="4 Mei Comité Oosterparkbuurt"
			width="404"
			height="178"
			loading="eager"
		/>
	</a>

	<Nav>
		<NavItem active={currentPage === 'gedenkposters'} href="/">Home</NavItem>
		<NavItem active={currentPage === 'adressen'} href="/adressen">Gedenkposters</NavItem>
	</Nav>
</header>

<style>
	header {
		display: flex;
		width: 100%;
		/* Lining up with the side filter */
		padding: var(--spacing-sm) calc(var(--spacing-sm) + 0.2rem);
		margin-bottom: var(--spacing-sm);
		background-color: #fff;
		box-shadow: 0 -20px 10px 20px rgba(0, 0, 0, 0.303);
		align-items: center;
		justify-content: space-between;
		position: fixed;
		top: 0;
		z-index: 200;
	}

	img {
		width: 100%;
		max-width: 151px;
		height: auto;
	}

	@media (min-width: 700px) {
		header {
			justify-content: flex-start;
		}
	}
</style>
