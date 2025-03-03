<script lang="ts">
	import type { Snippet } from "svelte"

	interface Props {
		icon?: true
		size?: "small" | "normal"
		variant?: "active" | "primary" | "secondary" | "tritery"
		children: Snippet
		class: string
	}

	let props: Props = $props()
</script>

<button
	data-icon-only={props.icon}
	class={["data-[icon-only]:px-3", props.class]}
>
	<span class="truncate">
		{@render props.children()}
	</span>
</button>
