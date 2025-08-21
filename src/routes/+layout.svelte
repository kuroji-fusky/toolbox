<script lang="ts">
  import "../app.css";

  import { onMount, type Snippet } from "svelte";
  import interFont from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
  import interFont700 from "@fontsource/inter/files/inter-latin-700-normal.woff2?url";
  import { sidebarExpandState } from "$lib/stores";

  import { GlobalSidebar, Navbar } from "$lib/components/base";

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();

  // glob the routes to list them from the frontend
  // const rawRoutes = import.meta.glob("./**/*.svelte");

  // const allRoutes = Object.entries(rawRoutes).map(([name, file]) => {
  //   const __name = name.replace("./", "/");
  //   return [__name, file];
  // });

  // onMount(() => {
  //   console.log(allRoutes)
  // });
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
<div class="h-[calc(theme(height.dvh)-theme(spacing.16))]">
  <GlobalSidebar />
  <div
    class={[
      "flex-1 dark:bg-neutral-900 transition-[margin]",
      $sidebarExpandState && "ml-72",
    ]}
  >
    <main
      id="skip-to-content"
      class="py-3.5 px-4 min-h-[calc(theme(height.dvh)-theme(spacing.14))] w-full"
    >
      {@render children()}
    </main>
  </div>
</div>
