<script>
  const {
    street,
    house_number,
    addition,
    floor,
    person
  } = $props();
</script>

<article>
  <h1>{street} {house_number} {addition} {floor}</h1>
  <h2>Personen op dit adres</h2>
  <ul>
    {#each person as person}
      <li>{person.first_name} {person.last_name}</li>
    {/each}
  </ul>
</article>

<style>
	article {
		height: fit-content;
		padding: var(--spacing-xs);
	}

  h1 {
		font-size: var(--font-size-title-md);
		background-color: var(--blue-200);
		width: fit-content;
		padding: var(--spacing-xs);
		margin-left: calc(-1 * var(--spacing-xs));
	}

	h2 {
		margin: var(--spacing-md) 0 var(--spacing-xs);
	}

	ul {
		list-style: none;
	}

	ul li {
		font-weight: var(--font-weight-regular);
	}
</style>