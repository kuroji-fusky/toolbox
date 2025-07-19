<script lang="ts">
  import { navigationItems } from "./GlobalNavItems"
</script>

<aside
  id="global-sidebar"
  class="flex-shrink-0 w-72 h-[calc(100dvh-3.25rem)] *:p-4 *:pb-0 border-r border-r-slate-300"
>
  <div class="*:mb-4 last:*:mb-0">
    {#each navigationItems as { heading, subitems }}
      <div>
        {#if heading}
          <div class="opacity-60 my-2 cursor-default select-none">
            {heading}
          </div>
        {/if}
        <ul class="space-y-1.5">
          {#each subitems as { label, path }}
            <li>
              <a
                href={path}
                class="block rounded-md border transition-all hover:border-slate-400 w-full text-left py-2 px-3"
              >
                {label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  <footer class="text-xs space-y-1.5">
    <div>Built by kuroji-fusky; &copy; 2025</div>
    <div>
      <a
        href="https://github.com/kuroji-fusky/toolbox"
        target="_blank"
        rel="noreferrer noopener">Source code</a
      >
    </div>
  </footer>
</aside>
