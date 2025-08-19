<script lang="ts">
  import type { Snippet } from "svelte"

  interface Props {
    resizable?: true
    width?: string
    rightView: Snippet
    children: Snippet
  }

  const props: Props = $props()
</script>

<div id="split-view" class="flex">
  <div id="split-view__left-pane">
    {@render props.children()}
  </div>
  <div id="split-view__separator"></div>
  <div id="split-view__right-pane">
    {@render props.rightView?.()}
  </div>
</div>
