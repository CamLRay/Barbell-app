<script>
  import "../app.css";
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';

  let options =[
    { name: "dashboard", icon: ["material-symbols:dashboard-outline", "material-symbols:dashboard" ] }, 
    { name: "history", icon: ["material-symbols-light:book-outline", "material-symbols-light:book" ] }, 
    { name: "", icon: ["f7:plus-app-fill", "f7:plus-app-fill"] }, 
    { name: "exercises", icon: ["healthicons:exercise-outline", "healthicons:exercise"] },
    { name: "coaching", icon: ["game-icons:weight-lifting-up", "game-icons:weight-lifting-up"] } 
  ]

    console.log($page.route.id)
</script>
<nav class="fixed bottom-0 grid grid-cols-5 bg-black text-white min-w-full">
  {#each options as option}
  {#if "/" + option.name === $page.route.id}
  <!-- selected -->
  <a href="/{option.name}" class="capitalize grid grid-rows-1 place-items-center rounded-b-xl py-2  border-t-2 text-xs" ><Icon icon={option.icon[1]} class="text-3xl text-white"/>{option.name}</a>
  {:else}
  <!-- !selected -->
  <a href="/{option.name}" class="capitalize border-t-2 grid grid-rows-1 place-items-center hover:bg-zinc-900 py-2 text-xs text-zinc-500" ><Icon icon={option.icon[0]} class="text-3xl"/>{option.name}</a>
  {/if}
  {/each}
</nav>

<style lang="postcss">
  :global(body) {
    @apply bg-zinc-900
  }
</style>
<slot />