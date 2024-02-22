<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
export let pageName = '';

onMount(() => {
  // Subscribe to changes in the $page store
  const unsubscribe = page.subscribe((value) => {
    pageName = value.route.id || '';
    pageName = pageName.slice(1)
    // pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    
  });

  // Unsubscribe when the component is destroyed
  return () => {
    unsubscribe();
  };
});


</script>
<nav>
	<ul>
		<nav>
			<a href="/" class="brand">Linksaw</a>
		  
			{#if pageName == ''}
			  <a href="/"></a>
			{:else if pageName === 'menu'}
			  <a href="/profile">Profile</a>
			{:else}
			  <a href="/menu">Menu</a>
			{/if}
		  </nav>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
		z-index: 1000;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	a {
		margin: 20px;
	}

  
  p {
    margin-left: 20px;
  }

</style>
