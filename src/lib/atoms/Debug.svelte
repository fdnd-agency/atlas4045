<script>
	let width = $state(0);
	let height = $state(0);
</script>

<div
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<p>W: {width}px</p>
	<p>H: {height}px</p>
</div>

<style>
	div {
    background: linear-gradient(150deg, var(--brown-light) 0%, var(--brown-neutral) 100%);
    border: 1px var(--brown-dark) solid;
		height: 100%;
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	p {
		background: hsla(0, 0%, 0%, 0.5);
		font-size: 0.75rem;
		padding: 0.2rem;
		color: white;
		margin: 0;
    width: fit-content;
	}
</style>
