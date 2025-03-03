<script lang="ts">
  import "../app.css"
  import { Navbar, GlobalSidebar } from "$lib/components/Base"
</script>

<Navbar />
<div class="flex">
  <GlobalSidebar />
  <main id="skip-to-content" class="flex-1 py-1.5 px-8">
    <slot />
  </main>
</div>
