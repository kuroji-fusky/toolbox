<script lang="ts">
  import "../app.css";

  import type { Snippet } from "svelte";
  import interFont from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
  import interFont700 from "@fontsource/inter/files/inter-latin-700-normal.woff2?url";

  import { GlobalSidebar, Navbar } from "$lib/components/base";

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<svelte:head>
  <link
    rel="preload"
    href={interFont}
    as="font"
    crossorigin="anonymous"
    fetchpriority="high"
  />
  <link
    rel="preload"
    href={interFont700}
    as="font"
    crossorigin="anonymous"
    fetchpriority="auto"
  />
</svelte:head>

<Navbar />
<div class="flex h-[calc(theme(height.dvh)-theme(spacing.12))]">
  <GlobalSidebar />
  <div class="flex-1">
    <main
      id="skip-to-content"
      class="flex-1 py-3.5 px-4 min-h-[calc(theme(height.dvh)-theme(spacing.12))] w-full"
    >
      {@render children()}
    </main>
  </div>
</div>
