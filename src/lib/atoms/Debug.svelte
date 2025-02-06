<script>
	let width = $state(0);
	let height = $state(0);

	let randomColor1 = Math.random() * (135 - 60) + 60;
	let randomColor2 = Math.random() * (315 - 220) + 220;
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
    background: linear-gradient(150deg, var(--color-brown-light) 0%, var(--color-brown) 100%);
    border: 1px var(--color-brown-dark) solid;
		display: inline-block;
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
