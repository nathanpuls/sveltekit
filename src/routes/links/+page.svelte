<script>
  import { onMount } from 'svelte';
  import { collection, getDocs } from 'firebase/firestore/lite';
  import { db } from '$lib/firebase'; // Adjust the path based on your project structure

  let data = [];

  onMount(async () => {
    if (db) {
      const querySnapshot = await getDocs(collection(db, 'your_collection_name'));
      data = querySnapshot.docs.map(doc => doc.data());
    }
  });
</script>

<main>
  {#each data as item (item.id)}
    <p>{item.name}</p>
  {/each}
</main>

  
  
  