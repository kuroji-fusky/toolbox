<script lang="ts">
  import { sidebarExpandState } from "$lib/stores";
  import { CopyIcon, HeartIcon, PinIcon } from "../icons";
  import SidebarItem from "./SidebarItem.svelte";
</script>

<nav
  id="global-sidebar"
  class={[
    "fixed top-12 bottom-0 left-0 h-full w-72 select-none space-y-2 pt-1  bg-black transition-all transform-gpu *:mx-3",
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
  <section>
    <h2 class="px-3 py-1 opacity-50">CLI</h2>
    <SidebarItem title="Arguments" link="/arg-generator" />
    <SidebarItem title="FFmpeg Generator" link="/ffmpeg-cli-generator" />
    <SidebarItem title="REST" link="/network-rest-generator" />
  </section>
  <section>
    <h2 class="px-3 py-1 opacity-50">Types</h2>
    <SidebarItem title="Type to JSON Schema" link="/ast-visualizer" />
  </section>
  <section>
    <h2 class="px-3 py-1 opacity-50">For Masochists Only</h2>
    <SidebarItem title="AST Visualizer" link="/ast-visualizer" />
  </section>
</nav>
