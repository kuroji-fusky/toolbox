<script lang="ts">
  import "../app.css";
  import { GlobalSidebar, Navbar } from "$lib/components/Base";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<Navbar />
<div class="flex h-[calc(theme(height.dvh)-theme(spacing.16))]">
  <GlobalSidebar />
  <main id="skip-to-content" class="flex-1 py-1.5 px-8">
    {@render children()}
  </main>
</div>
