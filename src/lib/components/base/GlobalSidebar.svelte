<script lang="ts">
  import { sidebarExpandState } from "$lib/stores";
  import { ExtLinkIcon, HeartIcon } from "../icons";
  import SidebarItem from "./SidebarItem.svelte";
</script>

<nav
  id="global-sidebar"
  class={[
    "fixed top-12 bottom-0 left-0 h-full w-72 select-none space-y-2 pt-1 bg-black transition-all transform-gpu",
    !$sidebarExpandState && "-translate-x-full",
  ]}
>
  <!-- <section>
    <h2 class="px-3 py-1 opacity-50 flex items-center gap-x-1">
      <PinIcon class="pointer-events-none" />
      <span>Pinned</span>
    </h2>
    <span class="px-3">None lol</span>
  </section> -->
  <section class="mx-3">
    <h2 class="px-3 py-1 opacity-50">Generators</h2>
    <SidebarItem title="Tailwind Gradients" link="/tailwind-gradients" />
    <SidebarItem title="Custom element" link="/custom-elements" />
  </section>
  <section class="mx-3">
    <h2 class="px-3 py-1 opacity-50">CLI</h2>
    <SidebarItem title="Arguments" link="/arg-generator" />
    <SidebarItem title="FFmpeg Generator" link="/ffmpeg-cli-generator" />
    <SidebarItem title="REST" link="/network-rest-generator" />
  </section>
  <section class="mx-3">
    <h2 class="px-3 py-1 opacity-50">Types</h2>
    <SidebarItem title="Type to JSON Schema" link="/ast-visualizer" />
  </section>
  <section class="mx-3">
    <h2 class="px-3 py-1 opacity-50">For Masochists Only</h2>
    <SidebarItem title="AST Visualizer" link="/ast-visualizer" />
  </section>
  <div
    class="absolute grid bottom-12 inset-x-0 py-3 bg-black border-t border-t-neutral-100/40"
  >
    <button
      class="group mx-3 hover:bg-white/10 pr-2 flex rounded-md text-left items-center"
    >
      <span class="px-3 py-2 flex-1">Manage saved sheshies</span>
      <div class="flex shrink-0 opacity-50 group-hover:opacity-100">
        <div class="px-1.5 py-2">
          <HeartIcon />
        </div>
      </div>
    </button>
    <div
      class="group mx-3 hover:bg-white/10 pr-2 flex rounded-md items-center"
      role="button"
    >
      <a href="http://lmao" class="px-3 py-2 flex-1 block">Sauce code</a>
      <div class="flex shrink-0 opacity-50 group-hover:opacity-100">
        <div class="px-1.5 py-2">
          <ExtLinkIcon />
        </div>
      </div>
    </div>
  </div>
</nav>
