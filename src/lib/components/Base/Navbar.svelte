<script lang="ts">
  import { PanelLeftIcon, PanelLeftClosedIcon, KuroBrandIcon } from "../icons";
  import { sidebarExpandState } from "$lib/stores";
</script>

<nav class="px-3 py-2.5 flex justify-between *:my-auto bg-black">
  <div class="flex items-center">
    <button class="p-2.5 rounded-md cursor-pointer" onclick={() => sidebarExpandState.set(!$sidebarExpandState)}>
      {#if $sidebarExpandState}
        <PanelLeftIcon />
      {:else}
        <PanelLeftClosedIcon />
      {/if}
    </button>
    <div class="ml-3 inline-flex items-center gap-x-3.5">
      <a href="https://kurojifusky.com">
        <KuroBrandIcon width="1.5em" height="1.5em" />
      </a>
      <div class="h-4 border-l-2 rotate-12"></div>
      <a href="/" class="text-base px-2 py-1.5">Kuro's Dev Toolbox</a>
    </div>
  </div>
  <div>Links/action placeholder</div>
</nav>
