<script lang="ts">
  import { page } from "$app/state";

  interface Props {
    title: string;
    description?: string;
    otherMeta?: Record<string, unknown>;
  }

  const { pathname } = page.url;

  const { title, description, otherMeta }: Props = $props();

  const SITE_TITLE = "Kuro's Toolbox";

  const _title = pathname === "/" ? title : `${title} - ${SITE_TITLE}`;
</script>

<svelte:head>
  <title>{_title}</title>
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
  {/if}

  <meta property="og:site_name" content={SITE_TITLE} />

  <!-- {#if otherMeta}
		{#each otherMeta as [key, val]}
			<meta name={key} content={val} />
		{/each}
	{/if} -->
</svelte:head>
