<script>
  import Exercise from '$lib/components/Exercise.svelte'
  import { exercises } from './data';

</script>

<h1 class="text-5xl text-center text-white">Exercises</h1>
<div class="text-white text-center">This is where the search bar goes</div>
<ul>
  {#each exercises as exercise}
  <Exercise {...exercise} />
  {/each}
</ul>
