<script lang="ts">
  import {
    PanelLeftIcon,
    PanelLeftClosedIcon,
    KuroBrandIcon,
    ShareIcon,
  } from "../icons";
  import { sidebarExpandState } from "$lib/stores";

  let isLogoFocused = $state(false);

  const logoFocusTrue = () => (isLogoFocused = true);
  const logoFocusFalse = () => (isLogoFocused = false);
</script>

<nav class="sticky top-0 px-1.5 py-2 flex justify-between select-none bg-inher">
  <div class="flex items-center">
    <button
      class="px-3.5 py-2 rounded-md cursor-pointer"
      onclick={() => sidebarExpandState.set(!$sidebarExpandState)}
    >
      {#if $sidebarExpandState}
        <PanelLeftIcon />
      {:else}
        <PanelLeftClosedIcon />
      {/if}
    </button>
    <div class="relative inline-flex items-center">
      <a
        href="https://kurojifusky.com"
        title="Back to kurojifusky.com"
        class="p-2"
        onmouseenter={logoFocusTrue}
        onfocus={logoFocusTrue}
        onmouseleave={logoFocusFalse}
        onfocusout={logoFocusFalse}
        onblur={logoFocusFalse}
      >
        <KuroBrandIcon width="1.33em" height="1.33em" />
      </a>
      <div
        class={[
          isLogoFocused ? "opacity-0" : "opacity-50",
          "h-3.5  border-l-2 rotate-[24deg] ml-2",
        ]}
      ></div>
      <a href="/" class={[isLogoFocused && "opacity-0", "ml-1 px-2 py-1.5"]}
        >Kuro's Dev Toolbox</a
      >
      {#if isLogoFocused}
        <div class="absolute left-12 w-max align-middle" aria-hidden="true">
          Back to kurojifusky.com
        </div>
      {/if}
    </div>
  </div>
  <div class="my-auto mr-1 flex items-center gap-x-1.5">
    <button class="p-1.5 cursor-pointer">
      <PanelLeftIcon />
    </button>
    <button class="p-1.5 cursor-pointer inline-flex gap-x-2">
      <span>Share</span>
      <ShareIcon />
    </button>
  </div>
</nav>
