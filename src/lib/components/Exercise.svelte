<script>
  export let name;
  export let bodypart;
  export let performance;
  export let id;
</script>
<a href={`/exercises/${id}`}>
  <div class="bg-zinc-950 rounded-lg m-2 py-1 px-4 text-white">
    <div>{name}</div>
    <div class="flex justify-between text-zinc-500">
      <p>{bodypart}</p>
      <p>{performance}</p>
    </div>
  </div>
</a>