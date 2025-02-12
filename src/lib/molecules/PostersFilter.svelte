<script>
  import TextInput from '$lib/atoms/TextInput.svelte';
	import Search from '$lib/molecules/Search.svelte';
</script>

<form>
  <TextInput id="birth-date" type="number" placeholder="Geboortedatum"/>

	<Search />
</form>

<style>
	form {
		display: flex;
    align-items: center;
    justify-content: center;
		gap: 1rem;
	}
</style>