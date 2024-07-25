<script>
  import "../app.css";
  let options =[
    { name: "Profile", icon: "person" }, 
    { name: "History", icon: "Clock" }, 
    { name: "Workout", icon: "Plus" }, 
    { name: "Exercises", icon: "dumbbell" },
    { name: "Coaching", icon: "clipboard" } ]
</script>
<nav class="fixed bottom-0 flex bg-black text-white min-w-full justify-evenly">
  {#each options as option}
  <i class="fa-solid fa-user"></i>
  <a href="/{option.name === "Workout" ? '' : option.name}">{option.name}</a>
  {/each}
</nav>
<slot />