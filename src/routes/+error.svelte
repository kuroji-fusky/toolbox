<script lang="ts">
  import { page } from "$app/state";
</script>

<div class="text-center space-y-2">
  <h1 class="text-2xl font-bold">{page.status}</h1>
  <p>{page.error?.message}</p>
</div>
