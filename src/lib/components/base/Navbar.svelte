<script lang="ts">
  import { PanelLeftIcon, PanelLeftClosedIcon, KuroBrandIcon } from "../icons";
  import { sidebarExpandState } from "$lib/stores";
</script>

<nav class="px-1.5 py-1 flex justify-between bg-black select-none">
  <div class="flex items-center">
    <button
      class="p-2.5 rounded-md cursor-pointer"
      onclick={() => sidebarExpandState.set(!$sidebarExpandState)}
    >
      {#if $sidebarExpandState}
        <PanelLeftIcon />
      {:else}
        <PanelLeftClosedIcon />
      {/if}
    </button>
    <div class="ml-1.5 inline-flex items-center gap-x-1">
      <a href="https://kurojifusky.com">
        <KuroBrandIcon width="1.25em" height="1.25em" />
      </a>
      <div class="h-3.5 opacity-50 border-l-2 rotate-[24deg] ml-2"></div>
      <a href="/" class="px-2 py-1.5">Kuro's Dev Toolbox</a>
    </div>
  </div>
  <div class="my-auto mr-1 flex items-center gap-x-1.5">
    <button class="p-1.5 cursor-pointer">
      <PanelLeftIcon />
    </button>
    <button class="p-1.5 cursor-pointer">
      <PanelLeftIcon />
    </button>
  </div>
</nav>
