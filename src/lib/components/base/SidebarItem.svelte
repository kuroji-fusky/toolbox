<script lang="ts">
  import { HeartIcon, EllipsisIcon } from "../icons";

  interface Props {
    title: string;
    link: string;
    isPinned?: boolean;
  }

  const { link: href, title, isPinned }: Props = $props();
</script>

<div class="group hover:bg-white/10 pr-2 flex items-center rounded-md" role="button">
  <a {href} class="px-3 py-2 flex-1 block">{title}</a>
  <div class="flex shrink-0 invisible group-hover:visible">
    <button class="px-1.5 py-2">
      <HeartIcon />
    </button>
    <button class="px-1.5 py-2">
      <EllipsisIcon />
    </button>
  </div>
</div>
