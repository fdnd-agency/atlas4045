<script>
  import Debug from "$lib/atoms/Debug.svelte";

	let { name, surname, address } = $props();
</script>

<li>
	<a href="/">
		<!-- TODO: Make this div an image once data is available -->
		<div class="placeholder">
      <Debug />
    </div>
		<p class="name">{name} {surname}</p>
		<p>{address}</p>
	</a>
</li>

<style>
  a {
    text-decoration: none;
    color: black;
  }

  /* This will become img once images are there */
	div.placeholder {
    width: 100%;
		height: auto;
    aspect-ratio: 3/2;
	}

	li {
		list-style-type: none;
		display: block;
		width: 100%;
	}

  p.name {
    margin-top: 0.25rem;
  }


</style>
