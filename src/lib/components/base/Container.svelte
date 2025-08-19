<script lang="ts">
  import type { Snippet } from "svelte"

  interface Props {
    title: string
    description?: string
    class?: string
    children: Snippet
  }

  const { title, description, children, class: _class }: Props = $props()
</script>

<article class="my-4">
  <div class="flex items-center">
    <h1 class="text-2xl font-bold flex-1">{title}</h1>
    <button
      class="py-1 px-1.5 rounded-md border border-transparent hover:border-slate-300"
      >Share</button
    >
  </div>
  {#if description}
    <p class="mt-1 opacity-60">{description}</p>
  {/if}
</article>
<div class={_class}>
  {@render children()}
</div>
