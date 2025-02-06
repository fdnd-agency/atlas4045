<script>
	let width = $state(0);
	let height = $state(0);

	let randomColor1 = Math.random() * 361;
	let randomColor2 = Math.random() * 361;
</script>

<div
	bind:clientWidth={width}
	bind:clientHeight={height}
	style="background: linear-gradient(150deg, hsl({randomColor1}, 100%, 50%), hsl({randomColor2}, 100%, 50%));"
>
	<p>W: {width}px</p>
	<p>H: {height}px</p>
</div>

<style>
	div {
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
